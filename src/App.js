import React, { Component } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import MainContainer from "./components/MainContainer";

import { Container } from "react-bootstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <NavContainer />
        <MainContainer />
      </Container>
    );
  }
}

export default App;
