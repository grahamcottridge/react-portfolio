import React, { Component } from "react";
import Item from "./Item";

class Items extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          id: 1,
          title: "Item 1",
          img: "https://via.placeholder.com/600x450",
          tech: "React",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: 2,
          title: "Item 2",
          img: "https://via.placeholder.com/600x450",
          tech: "Ruby",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: 3,
          title: "Item 3",
          img: "https://via.placeholder.com/600x450",
          tech: "JavaScript",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      ]
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {items.map(item => (
          <Item
            key={item.id}
            img={item.img}
            title={item.title}
            tech={item.tech}
            description={item.description}
          />
        ))}
      </div>
    );
  }
}

export default Items;
