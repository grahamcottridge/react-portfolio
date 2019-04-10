import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {
    navCollapsed: true
  };

  onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    const { navCollapsed } = this.state;
    return (
      // <div className="container">
      <div className="navbar navbar-expand-md navbar-light bg-light op">
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
          onClick={this.onToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </div>
      // </div>
    );
  }
}

export default Header;
