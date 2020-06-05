import React, { Component } from "react";
import "../css/BookDetail.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import RecommendationForm from "./RecommendationForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchBook } from "../actions/index";

class BookDetail extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   title: "Hi",
    //   book: {
    //     title: "",
    //     author: "JK Rowling",
    //     id: "aDdyDwAAQBAJ",
    //     image: "https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg",
    //     description:
    //       "'There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year.' Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true.",
    //     tags: ["Friendship", "Adventure"],
    //     recommendations: [
    //       {
    //         user: "Pierre",
    //         text:
    //           "Despite not normally being a fan of fantasy, I loved the friendship between Harry, Ron, and Hermione.",
    //         id: "aDdyDwAAQBAJ",
    //         tags: ["Friendship"],
    //       },
    //       {
    //         user: "Pierre",
    //         text:
    //           "Despite not normally being a fan of fantasy, I loved the friendship between Harry, Ron, and Hermione.",
    //         id: "aDdyDwAAQBAJ",
    //         tags: ["Friendship"],
    //       },
    //     ],
    //   },
    // };

    this.printBook = this.printBook.bind(this);
  }

  componentDidMount() {
    // we want to grab the ID from the URL so that if someone enters from a URL, it will work
    this.props.searchBook(this.props.id);
  }

  detailTags() {
    return this.state.book.tags.map((tag) => {
      return (
        <li>
          <Button type="button">{tag}</Button>
        </li>
      );
    });
  }

  // iterate through tags and return mapped results as html elements

  //iterate through recommendations and return mapped results as html elements

  detailRecommendations() {
    return this.state.book.recommendations.map((recommendation) => {
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
  }

  printBook() {
    return (
      <Row>
        {/* Book Detail Info */}
        <Col lg={6} id="detail-info">
          <h1 id="detail-title">{this.state.title}</h1>
          <p id="detail-author">
            <em>by</em> {this.state.book.author}
          </p>
          <p id="detail-description">{this.state.book.description}</p>
          <p id="detail-isbn">
            <strong>ISBN:</strong> {this.state.book.isbn}
          </p>

          <ul>
            <li id="theme-header">Themes:</li>
            {/* mapped list of tag names for selected book */}
            {this.detailTags}
          </ul>
        </Col>

        {/* Book Detail Image */}
        <Col lg={6} id="detail-image-col">
          <img
            src={this.state.book.image}
            alt={`Cover of ${this.state.book.title}`}
          />

          {/* Add recommendation Button  */}
          <div id="add-recommendation">
            <Button id="add-recommendation-button">Recommend This Book</Button>
          </div>
        </Col>
      </Row>
    );
  }

  render() {
    console.log("Props at render are", this.props);

    return (
      <Row id="main" className="justify-content-md-center">
        <Col lg={10}>
          <Container id="book-detail">
            {this.printBook()};
            <Row>
              <Col>
                <hr />
                {/* Form to Add Recommendations (hidden by default) */}
                {/* <div className="hide"> */}
                <RecommendationForm />
                {/* </div> */}

                {/* List of recommendations for current book */}
                <div id="detail-recommendations">
                  {this.detailRecommendations}
                </div>

                <hr />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log("state is", state);
  return {
    book: state.book,
    id: ownProps.match.params.id,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
