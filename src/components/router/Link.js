import React, { Component } from "react";
import PropTypes from "prop-types";

export class Link extends Component {

  handleClick = (event) => {
    event.preventDefault();

    //nuevas versiones de lint no me deja usar history directamente. La opcion es usar window.history.pushSt....
    history.pushState(null, "", this.props.to); //eslint-disable-line
  };

  render() {
    // esto me refresca la pagina, no es lo que quiero con un SPA
    //return <a href={this.props.to}>{this.props.children}</a>  --> voy a usar handleClick()

    return (
      <a href="#" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}