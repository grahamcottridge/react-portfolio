import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  render() {
    return (
      <div class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">
          Graham Cottridge
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarUnorderedList"
          aria-controls="navbarUnorderedList"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarUnorderedList">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link active">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link disabled">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>

      // <AppBar
      //   position="fixed"
      //   style={{
      //     backgroundColor: "#2f2f2f",
      //     boxShadow: "none",
      //     padding: "10px 0px"
      //   }}
      // >
      //   <Toolbar>
      //     <div className="header-logo">
      //       <div className="font-name header-logo-venue">Graham Cottridge</div>
      //       <div className="header-logo-title">Web Developer</div>
      //     </div>

      //     <IconButton
      //       aria-label="Menu"
      //       color="inherit"
      //       onClick={() => console.log("open")}
      //     >
      //       <MenuIcon />
      //     </IconButton>
      //   </Toolbar>
      // </AppBar>
    );
  }
}

export default Header;
