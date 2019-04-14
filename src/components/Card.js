import React, { Component } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/`;
export default class CardDetails extends Component {
  constructor() {
    super();
    this.state = {
      stationDetails: null
    };
  }

  componentDidMount() {
    fetch(`${URL}stations/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          stationDetails: data
        });
      });
  }
  render() {
    console.log(this.state.stationDetails);
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Visibility
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {this.state.stationDetails
                ? `Visibility: ${this.state.stationDetails.visibility.repr}`
                : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Wind Direction{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {this.state.stationDetails
                ? `Wind Direction: ${
                    this.state.stationDetails.wind_direction.repr
                  } degrees`
                : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Wind Speed{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {this.state.stationDetails
                ? `Wind Speed: ${
                    this.state.stationDetails.wind_speed.repr
                  } mph `
                : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Temperature{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {this.state.stationDetails
                ? `Temperature: ${
                    this.state.stationDetails.temperature.repr
                  } degrees`
                : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Cloud Cover{" "}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              {this.state.stationDetails &&
              this.state.stationDetails.clouds.length > 0
                ? this.state.stationDetails.clouds.map(cloud => {
                    return (
                      <div>
                        Cloud Cover: {cloud.repr}, Altitude:{cloud.altitude}
                      </div>
                    );
                  })
                : "none"}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
