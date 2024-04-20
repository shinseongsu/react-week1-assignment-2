import Operator from './Operator';

function calculator(accumulator, clickedNumber, clickedOperator) {
  return Operator[clickedOperator](accumulator, clickedNumber);
}

export default calculator;