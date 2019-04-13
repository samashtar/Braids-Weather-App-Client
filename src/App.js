import React, { Component } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import MainContainer from "./components/MainContainer";

import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <NavContainer />
          <MainContainer />
        </Jumbotron>
      </Container>
    );
  }
}

export default App;
