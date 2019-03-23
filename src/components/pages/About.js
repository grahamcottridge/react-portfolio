import React from "react";

const About = () => {
  return (
    <div className="container">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">About Me</h4>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
            pellentesque lorem sed elementum. Suspendisse maximus convallis ex.
            Etiam eleifend velit leo.
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
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
