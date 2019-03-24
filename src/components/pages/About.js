import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-body">
          <h4 className="card-title">About Me</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
            pellentesque lorem sed elementum. Suspendisse maximus convallis ex.
            Etiam eleifend velit leo.
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="//www.slideshare.net/slideshow/embed_code/key/ge57KoibDCJiYD"
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
