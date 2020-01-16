import React, { Component } from "react";
import { TargetListContext } from "../TargetList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class TargetsSet extends Component {
  static contextType = TargetListContext;

  deleteTarget = name => {
    const [list, setList] = this.context;
    setList(list.filter(list => list.name !== name));
  };

  render() {
    const [list, setList] = this.context;

    return list.map(list => (
      <div className="target-item" key={list.name}>
        <p>{list.name}</p>
        <button onClick={this.deleteTarget.bind(this, list.name)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    ));
  }
}
