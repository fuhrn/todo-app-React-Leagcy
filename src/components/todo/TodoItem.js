import React from "react";
// Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
import PropTypes from 'prop-types'

export const TodoItem = ({id, name, isComplete}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={isComplete} />
      {name}
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}