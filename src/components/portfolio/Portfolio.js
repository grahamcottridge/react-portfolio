import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import Items from "./Items";

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <main>
          <h1 className="mb-sm-4 text-center">Portfolio</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            placerat mauris sed massa vehicula lobortis. Fusce at justo ante.
            Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec
            pellentesque euismod. Nullam mollis, massa non porttitor luctus,
            ipsum mauris consectetur ex, non facilisis augue turpis vitae orci.
            Aenean eu mattis quam.
          </p>
          <hr />

          <Items />
        </main>
      </Container>
    );
  }
}

export default Portfolio;
