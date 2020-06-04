import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import Sidebar from "./Sidebar";
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
      <Row id="main">
        {/* SideBar */}
        <Col lg={3} className="left-side">
          <Sidebar />
        </Col>

        {/* Current View */}
        <Col lg={9} className="right-side">
          <Switch>
            {/* Default/List View */}
            <Route exact path={["/", "/books"]} component={BookList} />

            {/* Single Book/Detail View */}
            <Route path={"/books/:isbn"} component={BookDetail} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
