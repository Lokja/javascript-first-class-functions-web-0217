function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function namedFunction(){return "Hey"}
}

function returnsAnAnonymousFunction() {
  return () => {return "Hey"}
}
