import React from "react";
import Image from "react-bootstrap/Image";
import graham from "../../resources/graham.jpg";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <hr />
          <Row>
            <Col>
              <Image src={graham} fluid />
              <br />
              <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                laoreet pellentesque lorem sed elementum. Suspendisse maximus
                convallis ex. Etiam eleifend velit leo.
              </p>
            </Col>
            <Col>
              <h5>Skills</h5>
              <ul>
                <li>...</li>
                <li>...</li>
              </ul>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="//www.slideshare.net/slideshow/embed_code/key/ge57KoibDCJiYD"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
