import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Component_BookShelf";

/********************Book list Component********************/
const BookList = ({ changeShelf, books }) => {
  const shelves = ["currentlyReading", "wantToRead", "read"];
  const shelfTitle = shelf => {
    switch (shelf) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want to Read";
      default:
        return "Read";
    }
  };
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1> My Reads! </h1>
      </div>
      <div className="list-books-content">
              <div>
      {/*Map boooks into respective shelves*/}
          {shelves.map(shelf => (
            <Shelf
              key={shelf}
              shelfTitle={shelfTitle(shelf)}
              shelfFilter={books.filter(book => book.shelf === shelf)}
              changeShelf={changeShelf}
            />
          ))}
          <div className="open-search">
            <Link to="/Search">Add a book </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
