import React, { Component } from "react";
import "./App.css";
import SearchPanel from "./components/SearchPanel/searchPanel";
import TodoList from "./components/TodoList/todoList";
import AddInput from "./components/AddInput/addInput";
import MoveDoing from "./components/MoveDoing/moveDoing";

export default class App extends Component {
  genId = 1;
  state = {
    todoData: [],
    term: "",
    filter: "all"
  };

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      id: this.genId++
    };
  }

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex(el => el.id === id);
      const newArr = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];
      return {
        todoData: newArr
      };
    });
  };
  addItem = text => {
    if (text !== "") {
      const newItem = this.createTodoItem(text);
      this.setState(({ todoData }) => {
        const newArr = [...todoData, newItem];
        return {
          todoData: newArr
        };
      });
    } else alert("Need more characters");
  };
  toogleProperty(id, arr, propName) {
    const indx = arr.findIndex(el => el.id === id);
    const oldDate = arr[indx];
    const newdateItem = { ...oldDate, [propName]: !oldDate[propName] };
    return [...arr.slice(0, indx), newdateItem, ...arr.slice(indx + 1)];
  }
  onToogleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(id, todoData, "important")
      };
    });
  };
  onToogleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toogleProperty(id, todoData, "done")
      };
    });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }
  onSearchChange = term => {
    this.setState({ term });
  };
  onFilterChange = filter => {
    this.setState({ filter });
  };
  render() {
    const { term, todoData, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done === true).length;
    const todoCount = todoData.length - doneCount;
    // const visibleItems = this.search(todoData, term);

    return (
      <div className="App">
        {/* <LoginBox /> */}
        <h1 className="ribbon">Todo List</h1>
        <SearchPanel
          onSearchChange={this.onSearchChange}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
        <MoveDoing toDo={todoCount} done={doneCount} />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToogleImportant={this.onToogleImportant}
          onToogleDone={this.onToogleDone}
        />
        <AddInput onItemAdded={this.addItem} />
      </div>
    );
  }
}
