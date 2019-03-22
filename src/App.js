import React, { Component } from "react";
import "./resources/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header_footer/Header";
import About from "./components/info/About";
import Contact from "./components/info/Contact";
import Portfolio from "./components/portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <Contact />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
