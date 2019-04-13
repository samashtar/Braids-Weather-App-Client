import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class CardContainer extends Component {
  render() {
    const { Station, City, State } = this.props.station;
    return (
      <Col className="justify-content text-center">
        <Link to={`/stations/${Station}`}>
          <Card border="primary" className="mt-4" style={{ width: "50vh" }}>
            <Card.Header>Airport: {Station}</Card.Header>
            <Card.Body>
              <Card.Title>
                Location: {City},{State}
              </Card.Title>
              <Card.Text>lol</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    );
  }
}
