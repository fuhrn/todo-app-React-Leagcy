import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        { id: 1, name: "Learn JSX", isComplete: true },
        { id: 2, name: "Build an Awesome App", isComplete: false },
        { id: 3, name: "Ship It!", isComplete: false },
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
    currentTodo: event.target.value
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
          <form>
            <input type="text" onChange={this.handleInputChange} value={ this.state.currentTodo }/>
          </form>
          <div className="Todo-List">
            <ul>
              {this.state.todos.map((todo) => (
                <li key={todo.id}>
                  <input type="checkbox" defaultChecked={ todo.isComplete }/>
                  {todo.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
