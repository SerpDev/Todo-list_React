import React from "react";
import TodoListItem from "../Todo-List-Item/todo-list-item";
import "./todoList.css";

const TodoList = ({ todos, onDeleted , onToogleImportant, onToogleDone}) => {
  const elements = todos.map(item => {
    return (
      <li key={item.id} className="list-group-item">
        <TodoListItem
          {...item}
          onDeleted={() => onDeleted(item.id)}
          onToogleDone={() => {
            onToogleDone(item.id);
          }}
          onToogleImportant={() => {
            onToogleImportant(item.id);
          }}
        />
      </li>
    );
  });
  return <div className="list-group todo-list">{elements}</div>;
};
export default TodoList;
