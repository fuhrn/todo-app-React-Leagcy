export const addTodo = (list, item) => list.concat(item)  // equivalente a [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)
