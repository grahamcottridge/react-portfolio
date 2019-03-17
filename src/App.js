import React, { Component } from "react";
import "./resources/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header_footer/Header";
import Card from "./components/portfolio/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <Card />
      </div>
    );
  }
}

export default App;
