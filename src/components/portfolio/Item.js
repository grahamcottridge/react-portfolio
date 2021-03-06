import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  image: {
    backgroundColor: "black",
    opacity: "1",
    ":hover": {
      opacity: "0.8",
      cursor: "pointer"
    }
  }
});

class Item extends Component {
  render() {
    const { img, title, tech, description, link } = this.props.item;
    return (
      <Col col="12" md="6" lg="4">
        <figure className="figure">
          <a className={css(styles.image)} href={link} target="_blank">
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
      </Col>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
