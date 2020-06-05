import React, { Component } from "react";
import "../css/Sidebar.css";
import _ from "lodash";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchBooks, sendTags } from "../actions/index";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };

    this.listOfTags = this.listOfTags.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  listOfTags() {
    return this.props.tags.map((tag) => {
      return (
        <li key={tag}>
          <Button type="button" onClick={() => this.props.sendTags(tag)}>
            {tag}
          </Button>
        </li>
      );
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchBooks(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onKeyPress = (e) => {
    if (e.which === 13) {
      this.onFormSubmit(e);
    }
  };

  handleTagSubmit(tag) {
    // check for presence of clicked tag
    // if it has been clicked before, remove from state
    // if it hasn't been clicked, add this tag to state
    console.log("got clicked?!? ", tag);
    this.props.sendTags(tag);
  }

  render() {
    return (
      <Container fluid id="sidebar">
        <Row>
          <Col>
            {/* Search Bar  */}
            <Form>
              <Form.Group controlId="searchBooks">
                <Form.Label>Search by Book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title or Author"
                  value={this.state.searchTerm}
                  onChange={this.onInputChange}
                  onKeyPress={this.onKeyPress}
                />
              </Form.Group>
            </Form>

            <p>or</p>

            {/* Tag List */}
            <h3>Select a Theme:</h3>

            <ul>
              {/* //mapped list of tags from state  */}
              {this.listOfTags()}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { tags: state.tags };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchBooks, sendTags }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
