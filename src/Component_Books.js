import React from "react";

/********************Book Component********************/
const Book = ({ book, changeShelf }) => {
  const { imageLinks, shelf, title, authors } = book;

  const bookCover = imageLinks
    ? imageLinks.thumbnail
    : "https://via.placeholder.com/128x193?text=No%20Cover";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 180,
            backgroundImage: `url("${bookCover}")`
          }}
        />
        <div className="book-shelf-changer">
          <select
            onChange={e => changeShelf(book, e.target.value)}
            value={shelf ? shelf : "none"}
          >
            <option value="move" disabled>Move Book to .. </option>
            <option value="currentlyReading"> Currently Reading </option>
            <option value="wantToRead"> Want to Read </option>
            <option value="read"> Read </option>
            <option value="none"> None </option>
          </select>
        </div>
      </div>
      <div className="book-title"> {title} </div>
      <div className="book-authors">

        {authors ? authors.join(", ") : "No authors info"}
      </div>
    </div>
  );
};

export default Book;
