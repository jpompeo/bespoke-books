import React, { Component } from "react";
import "../css/BookDetail.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import RecommendationForm from "./RecommendationForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchBook } from "../actions/index";
import _ from 'lodash';

class BookDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }

    this.printBook = this.printBook.bind(this);
    this.detailTags = this.detailTags.bind(this);
    this.showFormContainer = this.showFormContainer.bind(this);
  }

  componentDidMount() {
    this.props.searchBook(this.props.id);
  }

  detailTags() {
    const bookRecommendations = this.props.allRecommendations.filter(recommendation => {
      return recommendation.id === this.props.id;
    });

    return bookRecommendations.map((recommendation) => {
      return recommendation.tags.map((tag) => {
        return (
          <li>
            <Button type="button">{tag}</Button>
          </li>
        );
      });

    });
  }

  detailRecommendations() {
    const bookRecommendations = this.props.allRecommendations.filter(recommendation => {
      return recommendation.id === this.props.id;
    });

    return bookRecommendations.map((recommendation) => {
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

  showFormContainer() {
   if (this.state.showForm === false) {
     return "hide"
   } else {
     return ""
   }
  }

  printBook() {
    return (
      <Row>
        {/* Book Detail Info */}
        <Col lg={6} id="detail-info">
          <h1 id="detail-title">{this.props.title}</h1>
          <p id="detail-author">
            <em>by</em> {this.props.author}
          </p>
          <p id="detail-description">{this.props.description}</p>
          <p id="detail-isbn">
            <strong>ISBN:</strong> {this.props.isbn}
          </p>

          <ul>
            <li id="theme-header">Themes:</li>
            {/* mapped list of tag names for selected book */}
            {this.detailTags()}
          </ul>
        </Col>

        {/* Book Detail Image */}
        <Col lg={6} id="detail-image-col">
          <img src={this.props.image} alt={`Cover of ${this.props.title}`} />

          {/* Add recommendation Button  */}
          <div id="add-recommendation">
            <Button id="add-recommendation-button"
              onClick={event => {
                this.setState({showForm: true});
              }}>
              Recommend This Book</Button>
          </div>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <Row id="main" className="justify-content-md-center">
        <Col lg={10}>
          <Container id="book-detail">
            {this.printBook()}
            <Row>
              <Col>
                <hr />
                {/* Form to Add Recommendations (hidden by default) */}
                <div id="recommendation-form-container" className={this.showFormContainer()}>
                  <RecommendationForm />
                </div>

                {/* List of recommendations for current book */}
                <div id="detail-recommendations">
                  {this.detailRecommendations()}
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
  console.log("state is", state.book[0]);

  if (state.book[0]) {
    return {
      book: state.book[0],
      title: state.book[0].volumeInfo.title,
      author: state.book[0].volumeInfo.authors[0] || "",
      description: state.book[0].volumeInfo.description,
      image: state.book[0].volumeInfo.imageLinks.thumbnail,
      isbn: state.book[0].volumeInfo.industryIdentifiers[0].identifier,
      id: ownProps.match.params.id,
      allRecommendations: state.recommendations
    };
  } else {
    return {
      id: ownProps.match.params.id,
      allRecommendations: state.recommendations
    };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
