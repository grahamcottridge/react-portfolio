import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Items from "./Items";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <main>
          <h1 className="mb-sm-4 text-center">Portfolio</h1>
          <p className="lead text-center">A work in progress.</p>
          <hr />
          <Items />
        </main>
      </Container>
    );
  }
}

export default Portfolio;
