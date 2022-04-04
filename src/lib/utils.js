// junto los argumentos en un Rest Operator (comma separated list of args, budled in an []) 
// y luego expando esos args con Spread Operator como args de fn
export const partial = (fn, ...args) => fn.bind(null, ...args)