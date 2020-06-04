import React from "react";
import "../css/BookList.css";
import { Row, Col } from "react-bootstrap";

const BookList = () => {
  return (
    <div id="book-list">
      <h1>BookList</h1>

      <div className="flex-container">
        <Row className="noGutters">
          <ul className="list-covers">
            <li className="book-container" data>
              <img src="https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg" />
            </li>
            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81-y8fgFTTL.jpg" />
            </li>
            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81wLeKWJmrL.jpg" />
            </li>
            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71yP-dPa0mL.jpg" />
            </li>

            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81wLeKWJmrL.jpg" />
            </li>

            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/81-y8fgFTTL.jpg" />
            </li>
            <li className="book-container">
              <img src="https://images-na.ssl-images-amazon.com/images/I/71yP-dPa0mL.jpg" />
            </li>
          </ul>
        </Row>
      </div>
    </div>
  );
};

export default BookList;
