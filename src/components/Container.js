import React, { Component } from "react";
import { Adventures } from "./secondaryComponents/Adventures";
import { Targets } from "./secondaryComponents/Targets";
import { Diary } from "./secondaryComponents/Diary";

import { DataContext } from "./Data";

export class Container extends Component {
  static contextType = DataContext;

  state = {
    count: 0
  };

  handleIncrement = () => {
    const count = this.state.count;
    const days = this.context;
    if (count < days.length) this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const days = this.context;
    const dayNumber = this.state.count;
    console.log(this.state.count);

    return (
      <div className="container">
        <Adventures days={days} dayNumber={dayNumber} />

        <div className="diary-container">
          <Diary days={days} dayNumber={dayNumber} />
        </div>

        <Targets
          increment={this.handleIncrement}
          reset={this.handleReset}
          dayNumber={dayNumber}
        />
      </div>
    );
  }
}
