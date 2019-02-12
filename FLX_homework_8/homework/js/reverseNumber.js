function reverseNumber(value) {
  let reversedValue = 0;
  while (value !== 0) {
    reversedValue *= 10;
    reversedValue += value % 10;
    value -= value % 10;
    value /= 10;
  }
  return reversedValue;
}
reverseNumber(-456);
