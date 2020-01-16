import React, { Component } from "react";
import { TargetListContext } from "../TargetList";

export class TargetCheck extends Component {
  static contextType = TargetListContext;

  render() {
    const [list, setList] = this.context;

    return list.map(list => <p key={list.name}>{list.name}</p>);
  }
}
