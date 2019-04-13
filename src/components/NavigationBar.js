import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>Braid's Amazing Weather App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
