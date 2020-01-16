import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";

import { TargetListContext } from "../TargetList";
import { TargetsSet } from "./TargetsSet";
import { TargetCheck } from "./TargetCheck";

export class Targets extends Component {
  state = {
    newTargetName: "",
    maxTargetsAlert: false,
    noTargetsAlert: false,
    walkBtnClicked: false,
    emptyTarget: false,
    sameTargetsAlert: false,
    congratulation: false,

    targetNames: []
  };

  static contextType = TargetListContext;

  // functions

  addTarget = e => {
    e.preventDefault();
    const [list, setList] = this.context;

    this.setState({
      targetNames: this.state.targetNames.concat(this.state.newTargetName) // add new elements an return new array
    });
    console.log(this.state.targetNames);

    if (this.state.newTargetName === "") {
      this.setState({ emptyTarget: true });
    } else {
      if (this.state.targetNames.indexOf(this.state.newTargetName) !== -1) {
        let filteredArray = this.state.targetNames.filter(
          item => item !== this.state.newTargetName
        );
        this.setState({
          targetNames: filteredArray.concat(this.state.newTargetName)
        });
        this.setState({
          sameTargetsAlert: true
        });
      } else {
        if (list.length > 2) {
          this.setState({ maxTargetsAlert: true });
        } else {
          setList(prevTargets => [
            ...prevTargets,
            {
              name: this.state.newTargetName
            }
          ]);
        }
      }
    }

    this.setState({ newTargetName: "" });
  };

  // handle functions

  handleChange = e => {
    this.setState({ newTargetName: e.target.value });
  };

  handleAlertClosing = e => {
    this.setState({ maxTargetsAlert: false });
    this.setState({ noTargetsAlert: false });
    this.setState({ emptyTarget: false });
    this.setState({ sameTargetsAlert: false });
    this.setState({ congratulation: false });
  };

  handleWalkBtnClicked = e => {
    const [list, setList] = this.context;

    if (list.length < 1) {
      this.setState({ noTargetsAlert: true });
    } else {
      this.setState({ walkBtnClicked: true });
    }
  };

  handleWalkBtnClosed = e => {
    this.setState({ walkBtnClicked: false });
  };

  handleAlertWalking = e => {
    this.setState({ walkBtnClicked: false });
    if (this.props.dayNumber >= 7) {
      this.setState({ congratulation: true });
    } else {
      this.props.increment();
    }
  };

  // render

  render() {
    return (
      <div className="targets">
        <div className="container-targets">
          <div className="box-target">
            <p className="title-targets">Current Targets</p>
            <div className="target-list">
              <TargetsSet />
            </div>
          </div>
          <div className="box-small-target">
            <p className="title-targets">Add New Target</p>
            <form>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.newTargetName}
                maxLength="20"
              />
              <button type="submit" onClick={this.addTarget}>
                Add
              </button>
            </form>
          </div>
          <div className="walk-btn">
            <button onClick={this.handleWalkBtnClicked}>
              Walk
              <p>
                <FontAwesomeIcon icon={faWalking} />
              </p>
            </button>
          </div>

          <div
            className={this.state.walkBtnClicked ? "target-alert" : "no-alert"}
          >
            <div className="walk-check">
              <p>Did you accomplished your targets?</p>
              <div className="target-check-box">
                <TargetCheck />
              </div>
              <button onClick={this.handleWalkBtnClosed}>Not yet</button>
              <button onClick={this.handleAlertWalking}>Yes!</button>
            </div>
          </div>

          <div className={this.state.emptyTarget ? "target-alert" : "no-alert"}>
            <div>
              <p>You have to write your target first!</p>
              <button onClick={this.handleAlertClosing}>Got it!</button>
            </div>
          </div>

          <div
            className={this.state.maxTargetsAlert ? "target-alert" : "no-alert"}
          >
            <div>
              <p>
                You have max number of targets! Delete or finish one to add
                another.
              </p>
              <button onClick={this.handleAlertClosing}>Got it!</button>
            </div>
          </div>

          <div
            className={this.state.noTargetsAlert ? "target-alert" : "no-alert"}
          >
            <div>
              <p>
                You don't have any target yet! You need to have at least one
                target to move your journey.
              </p>
              <button onClick={this.handleAlertClosing}>Got it!</button>
            </div>
          </div>

          <div
            className={
              this.state.sameTargetsAlert ? "target-alert" : "no-alert"
            }
          >
            <div>
              <p>You already have this target!</p>
              <button onClick={this.handleAlertClosing}>Got it!</button>
            </div>
          </div>

          <div
            className={this.state.congratulation ? "target-alert" : "no-alert"}
          >
            <div>
              <p>You finished the tour. Congratulation!</p>
              <button onClick={this.handleAlertClosing}>Got it!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//
