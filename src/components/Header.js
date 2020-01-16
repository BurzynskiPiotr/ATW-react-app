import React, { Component } from "react";
import { Nav } from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export class Header extends Component {
  state = {
    isNavOpen: false
  };

  render() {
    const isNavOpen = this.state.isNavOpen;

    return (
      <header>
        <div className="logo">
          <p className="title-long">Around The World</p>
          <p className="title-short">ATW</p>
        </div>
        <div className={"navigation"}>
          <button onClick={() => this.setState({ isNavOpen: !isNavOpen })}>
            <p className={isNavOpen ? "" : "navBtnRotate"}>
              <FontAwesomeIcon icon={faTimes} />
            </p>
          </button>
        </div>
        <Nav isNavOpen={this.state.isNavOpen} />
      </header>
    );
  }
}
