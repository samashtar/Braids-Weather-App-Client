import React, { Component } from "react";
import { Card, CardDeck, Col } from "react-bootstrap";
export default class CardContainer extends Component {
  render() {
    const { Station, City, State } = this.props.station;
    return (
      <Col className="justify-content text-center">
        <Card border="primary" className="mt-4" style={{ width: "50vh" }}>
          <Card.Header>Airport: {Station}</Card.Header>
          <Card.Body>
            <Card.Title>
              Location: {City},{State}
            </Card.Title>
            <Card.Text>lol</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
