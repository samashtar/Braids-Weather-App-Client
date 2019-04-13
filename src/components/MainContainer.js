import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = "https://cors-anywhere.herokuapp.com/http://localhost:5000/";

export default class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(`${URL}stations`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return <div style={{ backgroundColor: "yellow" }}>main container</div>;
  }
}
