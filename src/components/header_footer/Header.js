import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Graham Cottridge
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarUnorderedList"
          aria-controls="navbarUnorderedList"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarUnorderedList">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
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
