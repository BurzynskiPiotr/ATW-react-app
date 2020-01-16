import React, { Component } from "react";

export class Adventures extends Component {
  render() {
    const day = this.props.dayNumber;
    return (
      <div className="adventures">
        <p>Your Progress: {day}/7</p>
      </div>
    );
  }
}
