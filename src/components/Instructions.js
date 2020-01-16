import React, { Component } from "react";

export class Instructions extends Component {
  state = {
    intro: true
  };

  closeIntro = () => {
    this.setState({ intro: false });
  };

  render() {
    return (
      <div className={this.state.intro ? "instructions" : "instructions-hide"}>
        <p>
          Hello there!
          <br />
          <br />
          This app is still in development and it's not a final product.
          <br />
          <br />
          To progress you have to set yourself targets and when you feel like
          you done them, push the WALK button. Every time you done that, new
          country will be unlocked and available for you to find out fun facts
          about one of the city in it.
        </p>
        <button onClick={this.closeIntro}>Got it!</button>
      </div>
    );
  }
}
