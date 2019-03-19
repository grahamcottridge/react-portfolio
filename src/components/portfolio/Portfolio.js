import React, { Component } from "react";

import Item from "./Item";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <main>
            <h1 className="display-4 text-center">Portfolio</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat mauris sed massa vehicula lobortis. Fusce at justo ante.
              Morbi mollis urna a luctus efficitur. Aenean consectetur ipsum nec
              pellentesque euismod. Nullam mollis, massa non porttitor luctus,
              ipsum mauris consectetur ex, non facilisis augue turpis vitae
              orci. Aenean eu mattis quam.
            </p>
            <hr />
            <div className="row">
              <Item
                img="https://via.placeholder.com/600x450"
                title="Item 1"
                tech="React"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat mauris sed massa vehicula lobortis."
              />
              <Item
                img="https://via.placeholder.com/600x450"
                title="Item 2"
                tech="Ruby on Rails"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat mauris sed massa vehicula lobortis."
              />
              <Item
                img="https://via.placeholder.com/600x450"
                title="Item 3"
                tech="JavaScript"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              placerat mauris sed massa vehicula lobortis."
              />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Portfolio;
