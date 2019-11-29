import React, { Component } from "react";
import "./searchPanel.css";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };
  onSearchChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <div className="searchPanel">
        <input
          type="text"
          placeholder="search"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <ItemStatusFilter
          filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}
