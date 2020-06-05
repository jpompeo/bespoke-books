import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import BookList from "./BookList";
import BookDetail from "./BookDetail";

import "../css/App.css";

const App = () => {
  return (
    <Container id="app-view">
      {/* Header */}
      <Row id="header">
        <Col>
          <header>
            <h1>Bespoke Books</h1>
          </header>
          <hr />
        </Col>
      </Row>

      {/* Main Page */}

      {/* SideBar */}

      {/* Current View */}

      <Switch>
        {/* Default/List View */}
        <Route exact path={["/", "/books"]} component={BookList} />

        {/* Single Book/Detail View */}
        <Route path={"/books/:isbn"} component={BookDetail} />
      </Switch>
    </Container>
  );
};

export default App;
