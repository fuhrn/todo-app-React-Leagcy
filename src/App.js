import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

import { TodoForm, TodoList, Footer } from "./components/todo";
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
  filterTodos,
} from "./lib/todoHelpers";
import { loadTodos, createTodo, saveTodo, destroyTodo } from "./lib/todoService";

class App extends Component {
  // con PIS state ahora es una instance property de la clase APP y sigue siendo accesible como this.state
  state = {
    // vamos a buscar los todos a mi todoService, asi que vamos a mantener initial todos como empty []
    // todos: [
    //   { id: 1, name: "Learn JSX", isComplete: true },
    //   { id: 2, name: "Build an Awesome App", isComplete: false },
    //   { id: 3, name: "Ship It!", isComplete: false },
    // ],
    todos: [],
    currentTodo: "",
  };

  // vamos a tomar la ruta actual desde context
  static contextTypes = {
    route: PropTypes.string,
  };

  componentDidMount() {
    loadTodos().then((todos) => this.setState({ todos }));
  }

  handleRemove = (id, event) => {
    event.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
    destroyTodo(id)
      .then(() => this.showTempMessage('todo Removed'));
  };

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos, toggled);
    this.setState({ todos: updatedTodos });
    saveTodo(toggled).then(() => this.showTempMessage('Todo Updated'));
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
    createTodo(newTodo).then(() => this.showTempMessage("Todo added"));
  };


  showTempMessage = (msg) => {
    this.setState({ message: msg })
    setTimeout(() => this.setState({message: ''}), 2500)
  }


  // seteamos handleEmptySubmit como propiedad
  handleEmptySubmit = (event) => {
    // handleEmptySubmit(event) {
    event.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo name",
    });
  };

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    // aqui voy a usar context para conocer la ruta que recibo del componente <Router>
    const displayTodos = filterTodos(this.state.todos, this.context.route);
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
          {this.state.message && (
            <span className="success">{this.state.message}</span>
          )}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={this.state.currentTodo}
            //currentTodo={32}    -> tira error de type en la consola pues le pusimos PropType string
            handleSubmit={submitHandler}
          />
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
