import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import Item from "./Item";

class Items extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Item 1",
        img: require("../../resources/music_event.jpg"),
        tech: "React",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "http://striped-love.surge.sh/"
      },
      {
        id: 2,
        title: "Item 2",
        img: "https://via.placeholder.com/600x450",
        tech: "Ruby",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: ""
      },
      {
        id: 3,
        title: "Item 3",
        img: "https://via.placeholder.com/600x450",
        tech: "JavaScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: ""
      }
    ]
  };

  render() {
    const { items } = this.state;
    return (
      <Row>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    );
  }
}

export default Items;
