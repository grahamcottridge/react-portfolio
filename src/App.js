import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./resources/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
