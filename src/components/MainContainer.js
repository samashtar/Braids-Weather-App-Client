import React, { Component } from "react";
import { Spinner, CardDeck } from "react-bootstrap";
import CardContainer from "./CardContainer";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/`;

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      allStations: null
    };
  }

  componentDidMount() {
    fetch(`${URL}stations/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          allStations: data,
          isLoading: false
        });
      });
    console.log(this.state);
  }

  render() {
    return (
      <div className="mx-auto">
        <CardDeck>
          {this.state.isLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            this.state.allStations.map(station => (
              <CardContainer key={station.Station} station={station} />
            ))
          )}
        </CardDeck>
      </div>
    );
  }
}
