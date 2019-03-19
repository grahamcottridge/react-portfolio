import React, { Component } from "react";
import PropTypes from "prop-types";

class Item extends Component {
  render() {
    const { img, title, tech, description } = this.props;
    return (
      <div>
        <div className="col-12 col-md-6 col-lg-4">
          <figure className="figure">
            <a href="#">
              <img
                src={img}
                className="figure-img img-fluid img-thumbnail"
                alt=""
              />
            </a>
            <figcaption className="figure-caption">
              <h6>
                {title} <small>({tech})</small>
              </h6>
              <p>{description}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Item;