import React from "react";
// Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
import PropTypes from 'prop-types'

export const TodoForm = (props) => (
  <form>
    <input
      type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}
    />
  </form>)

  //...propTypes
TodoForm.propTypes = {
  //... PropTypes
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}


