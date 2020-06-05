import React from "react";
import "../css/BookDetail.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import RecommendationForm from "./RecommendationForm";

const BookDetail = () => {
  //sample of book item **TODO: pull from props/state
  const book = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "JK Rowling",
    isbn: 9781781100509,
    image: "https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg",
    description:
      "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    tags: ["Friendship", "Adventure"],
    recommendations: [
      {
        user: "Pierre",
        text:
          "Despite not normally being a fan of fantasy, I loved the friendship between Harry, Ron, and Hermione.",
        ISBN: "9781781100509",
        tags: ["Friendship"],
      },
      {
        user: "Pierre",
        text:
          "Despite not normally being a fan of fantasy, I loved the friendship between Harry, Ron, and Hermione.",
        ISBN: "9781781100509",
        tags: ["Friendship"],
      },
    ],
  };

  // iterate through tags and return mapped results as html elements
  const detailTags = book.tags.map((tag) => {
    return (
      <li>
        <Button type="button">{tag}</Button>
      </li>
    );
  });

  //iterate through recommendations and return mapped results as html elements
  const detailRecommendations = book.recommendations.map((recommendation) => {
    return (
      <div className="detail-recommendation">
        <h3>
          Here's why <strong>{recommendation.user}</strong> recommends this
          book:
        </h3>
        <p>{recommendation.text}</p>
      </div>
    );
  });

  return (
    <Row id="main" className="justify-content-md-center">
      <Col lg={10}>
        <Container id="book-detail">
          <Row>
            {/* Book Detail Info */}
            <Col lg={6} id="detail-info">
              <h1 id="detail-title">{book.title}</h1>
              <p id="detail-author">
                <em>by</em> {book.author}
              </p>
              <p id="detail-description">{book.description}</p>
              <p id="detail-isbn">
                <strong>ISBN:</strong> {book.isbn}
              </p>

              <ul>
                <li id="theme-header">Themes:</li>
                {/* mapped list of tag names for selected book */}
                {detailTags}
              </ul>
            </Col>

            {/* Book Detail Image */}
            <Col lg={6} id="detail-image-col">
              <img src={book.image} alt={`Cover of ${book.title}`} />

              {/* Add recommendation Button  */}
              <div id="add-recommendation">
                <Button id="add-recommendation-button">
                  Recommend This Book
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <hr />
              {/* Form to Add Recommendations (hidden by default) */}
              {/* <div className="hide"> */}
              <RecommendationForm />
              {/* </div> */}

              {/* List of recommendations for current book */}
              <div id="detail-recommendations">{detailRecommendations}</div>

              <hr />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default BookDetail;
