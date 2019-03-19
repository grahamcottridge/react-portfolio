import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div>
        <div class="col-12 col-md-6 col-lg-4">
          <figure class="figure">
            <a href="#">
              <img
                src="https://via.placeholder.com/600x450"
                class="figure-img img-fluid img-thumbnail"
                alt="Figure image"
              />
            </a>
            <figcaption class="figure-caption">
              <h6>
                Item <small>(React)</small>
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                laoreet pellentesque lorem sed elementum.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

export default Item;
