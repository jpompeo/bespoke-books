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
              <a href="#">
                <img src="https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg" />
                <div class="book-thumb-info">
                  <h1>Harry Potter and the Chamber of Secrets</h1>
                  <p class="short-description">
                    In Harry Potter and the Chamber of Secrets, the summer after
                    Harry's first year at Hogwarts has been his worst summer
                    ever ... the Dursleys more distant and horrible than ever
                    before
                  </p>
                </div>
              </a>
            </li>
            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81-y8fgFTTL.jpg" />
              </a>
            </li>
            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81wLeKWJmrL.jpg" />
              </a>
            </li>
            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71yP-dPa0mL.jpg" />
              </a>
            </li>

            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81wLeKWJmrL.jpg" />
              </a>
            </li>

            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/81-y8fgFTTL.jpg" />
              </a>
            </li>
            <li className="book-container">
              <a href="#">
                <img src="https://images-na.ssl-images-amazon.com/images/I/71yP-dPa0mL.jpg" />
              </a>
            </li>
          </ul>
        </Row>
      </div>
    </div>
  );
};

export default BookList;
