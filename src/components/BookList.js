import React, { Component } from "react";
import "../css/BookList.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.fetchBooks = this.fetchBooks.bind(this);
  }

  fetchBooks() {
    const uniqueBooks = _.uniqBy(this.props.recommendations, "ISBN");

    return uniqueBooks.map((book) => {
      return (
        <li className="book-container">
          <Link to={`/books/${book.ISBN}`}>
            <img src={book.image} />
          </Link>
        </li>
      );
    });
  }

  /*
  const parseBooks = () => {
    
    books.items.map(book => {

      return (
        <li className="book-container">
          <Link to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <div className="book-thumb-info">
              <h1>{book.volumeInfo.title}</h1>
              <p className="book-author-thumb">{book.volumeInfo.authors[0] || null}</p>
              <p className="short-description">
                {book.volumeInfo.description.substring(0, 60)}...
                  </p>
            </div>
          </Link>
        </li>
      );
    });
  };
  */

  render() {
    return (
      <div id="book-list">
        <h1>BookList</h1>

        <div className="filters-applied">
          Filters Applied:{" "}
          <Button variant="outline-dark" size="sm" className="filter">
            Adventure X
          </Button>
        </div>

        <div className="flex-container">
          <Row className="noGutters">
            <ul className="list-covers">
              {/* {parseBooks()} */}
              {this.fetchBooks()}
            </ul>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books, recommendations: state.recommendations };
}

export default connect(mapStateToProps)(BookList);
