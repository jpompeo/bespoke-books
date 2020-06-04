import React from "react";
import "../css/Sidebar.css";
import _ from "lodash";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Sidebar = () => {
  // sample list of tags ** TODO replace with state from store
  const tags = [
    "Adventure",
    "Belief",
    "Forgiveness",
    "Decisions",
    "Death & Dying",
    "Love",
    "Acceptance",
    "Courage",
    "Change",
    "Empathy",
    "Overcoming Adversity",
    "Pressure",
    "Friendship",
    "Sacrifice",
    "The Bonds of Family",
    "Suffering",
    "Conflict",
    "Abandonment",
    "Alienation",
    "Ambition",
    "Coming of Age",
    "Freedom",
    "Gender",
    "Justice",
    "Isolation",
    "Cruelty",
    "Fate",
    "Hope",
    "Guilt",
    "Black Lives Matter",
    "LGBTQ Pride",
  ];

  //iterate through all tags to create element for each
  const listOfTags = tags.map((tag) => {
    return (
      <li>
        <Button type="button"> {tag} </Button>
      </li>
    );
  });

  return (
    <Container fluid id="sidebar">
      <Row>
        <Col>
          {/* Search Bar  */}
          <Form>
            <Form.Group controlId="searchBooks">
              <Form.Label>Search by Book</Form.Label>
              <Form.Control type="text" placeholder="Enter Title or Author" />
            </Form.Group>
          </Form>

          <p>or</p>

          {/* Tag List */}
          <h3>Select a Theme:</h3>

          <ul>
            {/* //mapped list of tags from state  */}
            {listOfTags}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Sidebar;
