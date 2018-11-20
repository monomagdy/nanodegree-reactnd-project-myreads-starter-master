import React from "react";
import { Link } from "react-router-dom";
import Book from "./Component_Books";

/********************Search Component********************/
const BookSearch = props => {
    const {query, updateQuery, validSearch, result, changeShelf } = props;

    return (
        <div className="search-books">
            <div className="search-books-bar">
                {/*close search button*/}
                <Link className="close-search" to="/"> </Link>
                <div className="search-books-input-wrapper">
                    {/*Search books on keyboard input*/}
                    <input
                        placeholder="Search by title or author"
                        type="text"
                        value={query}
                        onChange={e => updateQuery(e.target.value)}
                    />
                </div>
            </div>
            {/*if Avaialble show books*/}
            {/*else show error msg*/}
            <div className="search-books-results">
                <ol className="books-grid">
                    {validSearch ? (
                        result.map(result => (
                            <li key={result.id}>
                                <Book book={result} changeShelf={changeShelf} />
                            </li>
                        ))
                    ) : (
                            <h1> Unavailable </h1>
                        )}
                </ol>
            </div>
        </div>
    );
};

export default BookSearch;
