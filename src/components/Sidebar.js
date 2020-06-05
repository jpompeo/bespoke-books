import React, { Component } from "react";
import "../css/Sidebar.css";
import _ from "lodash";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { bindActionCreators, connect } from "react-redux";
import { searchBook } from "./actions/index";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.listOfTags = this.listOfTags.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
  }

  listOfTags() {
    return this.props.tags.map((tag) => {
      return (
        <li>
          <Button type="button" onClick={this.handleSearchSubmit}>
            {tag}
          </Button>
        </li>
      );
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.searchBook(this.state.searchTerm);
    this.setState({ searchTerm: "" });
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleTagSubmit() {}

  render() {
    return (
      <Container fluid id="sidebar">
        <Row>
          <Col>
            {/* Search Bar  */}
            <Form onSubmit={this.handleTagSubmit}>
              <Form.Group controlId="searchBooks">
                <Form.Label>Search by Book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Title or Author"
                  value={this.state.searchTerm}
                  onChange={this.onInputChange}
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
  return bindActionCreators({ searchBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
