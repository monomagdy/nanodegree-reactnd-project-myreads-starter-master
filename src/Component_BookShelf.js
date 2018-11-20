import React from "react";
import Book from "./Component_Books";

/********************Book Shelves Component********************/
const BookShelf = ({ shelfTitle, shelfFilter, changeShelf }) => {
  return (
    <div className="bookshelf">
          <h2 className="bookshelf-title"> {shelfTitle} </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfFilter.map(book => (
            <li key={book.id}>
              <Book book={book} changeShelf={changeShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
