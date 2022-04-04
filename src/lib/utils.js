// junto los argumentos en un Rest Operator (comma separated list of args, budled in an []) 
// y luego expando esos args con Spread Operator como args de fn
export const partial = (fn, ...args) => fn.bind(null, ...args)


// pipe function. NO LA VOY A USAR, HACE COMPLEJO EL CODIGO
export const pipe = (f, g) => (...args) => g(f(...args))
