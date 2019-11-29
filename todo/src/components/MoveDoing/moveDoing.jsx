import React, { Component } from "react";
import "./moveDoing.css";

export default class MoveDoing extends Component {
  render() {
    const { done, toDo } = this.props;
    return (
      <div className="MoveDoing">
        <span>{`${toDo} more to do, `}</span>
        <span>{`${done} done`}</span>
      </div>
    );
  }
}
