import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { TodoForm, TodoList } from "./components/todo";
import { addTodo, generateId } from "./lib/todoHelpers";

class App extends Component {
  // con PIS state ahora es una instance property de la clase APP y sigue siendo accesible como this.state
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: true },
      { id: 2, name: "Build an Awesome App", isComplete: false },
      { id: 3, name: "Ship It!", isComplete: false },
    ],
    currentTodo: "",
  };

  // React agrego "Property Initializer Syntax (PIS)". Vamos a demostrarlo transformando el constructor en un
  // property initializer. Y podemos luego tambien evitar el binding de los metodos de la clase

  // Luego de transformar todo a PIS me va a aparecer en console warning de "useless constructor" --> entonces lo borro
  // constructor() {
  //   super();

    // this.state = {
    //   todos: [
    //     { id: 1, name: "Learn JSX", isComplete: true },
    //     { id: 2, name: "Build an Awesome App", isComplete: false },
    //     { id: 3, name: "Ship It!", isComplete: false },
    //   ],
    //   currentTodo: "",
    // };

    // si usamos PIS no necesitamos usar este extra binding. Para ello necesitamos a setear las funciones como properties
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  // }

  // seteamos handleInputChange como propiedad
  handleInputChange = (event) => {
    //handleInputChange(event) {
    this.setState({
      currentTodo: event.target.value,
    });
  };

  // seteamos handleSubmit como propiedad
  handleSubmit = (event) => {
  // handleSubmit(event) {
    event.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false,
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: "",
    });
  }

  // seteamos handleEmptySubmit como propiedad
  handleEmptySubmit = (event) => {
  // handleEmptySubmit(event) {
    event.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo name",
    });
  }

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Todo-app React Legacy.</p>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            //currentTodo={32}    -> tira error de type en la consola pues le pusimos PropType string
            handleSubmit={submitHandler}
          />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
