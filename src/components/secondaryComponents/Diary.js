import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export class Diary extends Component {
  render() {
    const days = this.props.days;
    const dayNumber = this.props.dayNumber;

    return days.map(day => (
      <DiaryList key={day.day} day={day} dayNumber={dayNumber} />
    ));
  }
}

class DiaryList extends Component {
  state = {
    dayIsOpen: false,
    dayisLocked: true
  };

  render() {
    const isOpen = this.state.dayIsOpen;
    const dayNumber = this.props.dayNumber;
    const day = this.props.day;

    if (dayNumber >= day.day) {
      this.state.dayisLocked = false;
    }

    return (
      <div className="single-day">
        <button
          className={this.state.dayisLocked ? "day-icon" : "day-unlocked"}
          onClick={() => this.setState({ dayIsOpen: !isOpen })}
          disabled={this.state.dayisLocked}
        >
          <p className="day-title">{day.country}</p>

          {this.state.dayisLocked ? (
            <p>
              <FontAwesomeIcon icon={faLock} />
            </p>
          ) : (
            ""
          )}
        </button>

        <div className={isOpen ? "openen-diary" : "diary"}>
          <div className="diary-content">
            <div className="title-diary">
              <p>{day.city}</p>
              <p className="country">{day.country}</p>
            </div>

            <div className="box-diary">
              <p>{day.story}</p>
            </div>

            <button onClick={() => this.setState({ dayIsOpen: !isOpen })}>
              go back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
