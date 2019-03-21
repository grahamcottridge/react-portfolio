import React, { Component } from "react";

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
          onClick={this.onToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}>
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
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link disabled">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
