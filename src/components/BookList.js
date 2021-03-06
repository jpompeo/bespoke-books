import React, { Component } from "react";
import "../css/BookList.css";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import Sidebar from "./Sidebar";
import { searchBook } from "../actions/index";

class BookList extends Component {
  constructor(props) {
    super(props);

    this.fetchBooks = this.fetchBooks.bind(this);
    this.renderBooksFromSearch = this.renderBooksFromSearch.bind(this);
  }

  fetchBooks() {
    // check if any tags were passed

    const uniqueBooks = _.uniqBy(this.props.recommendations, "id");

    let filteredBooks = uniqueBooks.filter((book) => {
      // if there is a match between given tag & book's tags array
      // difference will compare a subset to a superset, and having 0 differences
      // means that that all elements of chosenTags are present in book's tags
      if (
        _.difference(this.props.chosenTags, book.tags).length === 0 ||
        this.props.chosenTags === ""
      ) {
        return true;
      }
    });

    // get all the unique books
    // from those unique books, filter based on tag
    return filteredBooks.map((book) => {
      return (
        <li className="book-container" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <img src={book.image} />
          </Link>
        </li>
      );
    });
  }

  renderBooksFromSearch() {
    return this.props.books.items.map((book) => {
      // we only want books with pretty covers
      if (book.volumeInfo.hasOwnProperty("imageLinks")) {
        return (
          <li className="book-container">
            <Link to={`/books/${book.id}`}>
              <img src={book.volumeInfo.imageLinks.thumbnail} />
            </Link>
          </li>
        );
      }
    });
  }

  renderCurrentFilters() {
    return this.props.chosenTags.map((tag) => {
      return (
        <Button
          variant="outline-dark"
          size="sm"
          className="filter"
          key={`${tag}display`}>
          {tag}
        </Button>
      );
    });
  }

  render() {
    let renderList;

    // we want to decide whether to show a default (books we've had tagged)
    // or if there have been tags or search terms, we'll show them

    // if there is no search term (initial page load)
    console.log("The chosen tags is", this.props.chosenTags);

    if (!this.props.books) {
      renderList = this.fetchBooks();
    } else {
      // if there is a search that has populated
      console.log("The books array is", this.props.books);
      renderList = this.renderBooksFromSearch();
    }

    return (
      <Row id="main">
        <Col lg={3} className="left-side">
          <Sidebar />
        </Col>
        <Col lg={9} className="right-side">
          <div id="book-list">
            <div className="filters-applied">
              Filters Applied: {this.renderCurrentFilters()}
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
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books[0],
    recommendations: state.recommendations,
    searchTerm: state.searchTerm,
    chosenTags: state.chosenTags,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
