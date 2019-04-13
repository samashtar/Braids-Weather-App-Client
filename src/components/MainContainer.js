import React, { Component } from "react";
import { Spinner, CardDeck } from "react-bootstrap";
import CardContainer from "./CardContainer";
import { Route } from "react-router-dom";
import Card from "./Card";
const API_KEY = process.env.REACT_APP_API_KEY;
const URL = `https://cors-anywhere.herokuapp.com/https://wx.wearebraid.com/`;

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      allStations: null,
      allStationDetails: []
    };
  }

  componentDidMount() {
    //fetch all stations and it's details
    fetch(`${URL}stations/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => {
        data.forEach(station => {
          fetch(`${URL}stations/${station.Station}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_KEY}`
            }
          })
            .then(res => res.json())
            .then(data => {
              this.setState({
                allStationDetails: [...this.state.allStationDetails, data]
              });
            });
        });
        this.setState({
          allStations: data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div className="mx-auto">
        <Route
          exact
          path="/"
          render={() => (
            <CardDeck>
              {this.state.isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                this.state.allStations.map(station => {
                  return (
                    <CardContainer key={station.Station} station={station} />
                  );
                })
              )}
            </CardDeck>
          )}
        />
        <Route
          exact
          path="/stations/:id"
          render={() => <Card details={this.state.allStationDetails} />}
        />
      </div>
    );
  }
}
