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
    this.parseBooks = this.parseBooks.bind(this);
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

  parseBooks() {
    return this.props.books.items.map((book) => {
      return (
        <li className="book-container">
          <Link
            to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          </Link>
        </li>
      );
    });
  }

  render() {
    let renderList;

    // we want to decide whether to show a default (books we've had tagged)
    // or if there have been tags or search terms, we'll show them

    // if there is no search term (initial page load)
    if (!this.props.books) {
      renderList = this.fetchBooks();
    } else {
      // if there is a search that has populated
      console.log(this.props.books);
      renderList = this.parseBooks();
    }

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
              {renderList}
            </ul>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books[0],
    recommendations: state.recommendations,
    searchTerm: state.searchTerm,
  };
}

export default connect(mapStateToProps)(BookList);
