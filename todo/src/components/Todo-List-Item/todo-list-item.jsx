import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToogleImportant,
      onToogleDone,
      done,
      important
    } = this.props;

    let classNames = "todo-List-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span onClick={onToogleDone}>{label}</span>

        <button
          type="button"
          className="btn btn-outline-success pull-right"
          onClick={onToogleImportant}
        >
          <i className="fa fa-exclamation"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger pull-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}
