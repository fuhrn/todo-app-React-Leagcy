import React from "react";
import { TodoItem } from "./TodoItem";
// Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
import PropTypes from "prop-types";

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            handleToggle={props.handleToggle} {...todo}
            handleRemove={props.handleRemove}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
};
