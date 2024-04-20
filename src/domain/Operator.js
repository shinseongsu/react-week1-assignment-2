const Operator = {
  '': (x, y) => x || y,
  '=': (x, y) => x || y,
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => {
    if(y === 0) {
      return x;
    }
    return x / y
  },
};

export default Operator;