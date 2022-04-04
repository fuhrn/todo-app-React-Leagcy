import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { TodoForm, TodoList } from "./components/todo";
import { addTodo, generateId } from "./lib/todoHelpers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, name: "Learn JSX", isComplete: true },
        { id: 2, name: "Build an Awesome App", isComplete: false },
        { id: 3, name: "Ship It!", isComplete: false },
      ],
      currentTodo: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo-app React Legacy.</p>
        </header>
        <div className="Todo-App">
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            //currentTodo={32}    -> tira error de type en la consola pues le pusimos PropType string
            handleSubmit={this.handleSubmit}
          />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
