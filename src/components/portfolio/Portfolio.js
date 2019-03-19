import React, { Component } from "react";

import Item from "./Item";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <main>
            <h1 class="display-4 text-center">Portfolio</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat mauris sed massa vehicula lobortis. Fusce at justo ante.
              Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec
              pellentesque euismod. Nullam mollis, massa non porttitor luctus,
              ipsum mauris consectetur ex, non facilisis augue turpis vitae
              orci. Aenean eu mattis quam.
            </p>
            <hr />
            <div class="row">
              <Item />
              <Item />
              <Item />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Portfolio;
