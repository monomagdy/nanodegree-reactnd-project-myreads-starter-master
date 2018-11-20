import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
//import Book from './Component_Books'
import Search from "./Component_BooksSearch";
import List from "./Component_BooksList";

class BookApp extends React.Component {
  state = {
    query: "",
    shearchHistory: [],
    validSearch: true,
    books: []
  };
    /* immediately after the initial rendering get books from API*/
  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () =>
    BooksAPI.getAll().then(books =>
      this.setState({
        books
      })
    );
        /* Sort books into shelves*/
  changeShelf = (book, shelf) => {
    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
      });
    }
  };

  /* Search books*/
  updateQuery = query => {
    this.setState({
      query
    });
    this.searchResult(query);
  };

  searchResult = query => {
    if (query) {
      BooksAPI.search(query).then(shearchHistory => {
        console.log(shearchHistory);

        if (shearchHistory.error) {
          this.setState({
            shearchHistory: [],
            validSearch: false
          });
        } else {
          shearchHistory.map(bookFromSearch =>
            this.state.books.map(
              bookFromShelf =>
                bookFromShelf.id === bookFromSearch.id
                  ? (bookFromSearch.shelf = bookFromShelf.shelf)
                  : ""
            )
          );

          this.setState({
            shearchHistory: shearchHistory,
            validSearch: true
          });
        }
      });
    } else {
      this.setState({
        shearchHistory: [],
        validSearch: true
      });
    }
  };
        
  render() {
    return (
      <div className="app"> 
        <Route
          exact
          path="/" 
          render={() => ( 
            <List books={this.state.books} changeShelf={this.changeShelf} />
          )}   
        />
        <Route
          path="/Search"
          render={() => (
            <Search
              query={this.state.query}
              validSearch={this.state.validSearch}
              updateQuery={this.updateQuery}
              result={this.state.shearchHistory}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BookApp;
