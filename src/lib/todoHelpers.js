export const addTodo = (list, item) => list.concat(item)  // equivalente a [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

// nos aseguramos asi que no muteamos el todo obj
export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete });

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id)
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1)
  ]
}