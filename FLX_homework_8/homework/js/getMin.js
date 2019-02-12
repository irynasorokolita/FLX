function getMin () {
  let minValue = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < minValue) {
      minValue = arguments[i];
    }
  }
  return minValue;
}
getMin(1, 2, -6, 5, -8);
