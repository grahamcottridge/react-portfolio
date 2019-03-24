import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Item extends Component {
  render() {
    const { img, title, tech, description } = this.props.item;
    return (
      <Col col="12" md="6" lg="4">
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
            <h6>
              <a href="#" target="_blank">
                Link
              </a>
            </h6>
            <p>{description}</p>
          </figcaption>
        </figure>
      </Col>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
