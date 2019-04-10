import React from "react";
import Image from "react-bootstrap/Image";
import graham from "../../resources/graham.jpg";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <hr />
          <Row>
            <Col>
              <Image src={graham} fluid />
              <br />
              <p className="card-text mt-3">
                I'm a recent graduate of Le Wagon coding bootcamp — a start-up
                focused, 9-week intensive coding boot camp. Since then, I have
                continued to consolidate my skills and learn new ones including
                React. I’m quick-to-learn, love to solve problems and many of my
                skills are self-taught.
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
