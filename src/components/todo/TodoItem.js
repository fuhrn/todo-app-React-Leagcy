import React from "react";
// Note: React.PropTypes is deprecated as of React v15.5. Please use the prop-types library instead.
import PropTypes from 'prop-types'
import { partial } from "../../lib/utils";


export const TodoItem = ({ id, name, isComplete, handleToggle, handleRemove }) => {

  // primera opcion para pasar parametros a handleToggle -> usar una arrow function
  // const handleToggle = () => handleToggle(id)
  // ahora vamos a ir paso + adelante y eliminar la arrow function y usar bind to partially apply esta function,
  // uso null como primer param porque no estoy interesado en reset el context
  // const handleToggle_ = handleToggle.bind(null, id);
  // voy un paso mas y ahora uso "partial" para evitar usar bind. Partial se encarga de hacer el binding
  const handleToggle_ = partial(handleToggle, id);
  const handleRemove_ = partial(handleRemove, id)
  return (
    <li>
      <span className="delete-item"><a href="#" onClick={handleRemove_}>X</a></span>
      {/* como handleToggle va a recibir un event obj by default --> necesitamos definir un arrow function para pasar el id*/}
      <input type="checkbox" onChange={handleToggle_}
        // ahora q tenemos un onChange handler podemos reemplazar "defaultChecked" por "checked"
        //defaultChecked={isComplete} 
        checked={isComplete}
      />
      {name}
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}