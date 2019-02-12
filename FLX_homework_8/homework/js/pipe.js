function addOne(x) {
  return x + 1;
}
function pipe(value) {
  let result = value;
  for (let i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
}
pipe(2, addOne, addOne, addOne);
