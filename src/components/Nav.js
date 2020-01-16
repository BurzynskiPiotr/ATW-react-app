import React, { Component } from "react";

export class Nav extends Component {
  render() {
    const isNavOpen = this.props.isNavOpen;

    return (
      <nav className={isNavOpen ? "navOpen" : ""}>
        <div className="nav-section">
          <p>Info</p>
          <p className="nav-hover-area">
            This app will help you with your provisions by taking you AROUND THE
            WORLD stoping by the best places earth have to offer!
          </p>
        </div>

        <div className="nav-section">
          <p>Restart</p>
          <p className="nav-hover-area">Not available at the moment.</p>
        </div>

        <div className="nav-section">
          <p>Future updates</p>
          <p className="nav-hover-area">
            This app is in development. Next version will soon be updated.
          </p>
        </div>

        <div className="nav-section">
          <p>Author</p>
          <p className="nav-hover-area">Piotr Burzyński</p>
        </div>
      </nav>
    );
  }
}
