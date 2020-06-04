import React from "react";
import "../css/BookList.css";
import { Row, Col } from "react-bootstrap";

const BookList = () => {
  return (
    <div id="book-list">
      <h1>BookList</h1>

      <div class="flex-container">
        <Row className="noGutters">
          <ul class="list-covers">
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
            <li className="book-container">hi</li>
          </ul>

          {/* <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col>
          <Col lg="3">
            <div className="book-list-thumb"></div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
};

export default BookList;
