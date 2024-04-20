/* eslint-disable react/react-in-jsx-scope, react/jsx-filename-extension, no-unused-vars */

/* @jsx createElement */
import calculator from './domain/Calculator';
import Numbers from './domain/Numbers';
import Operators from './domain/Operators';
import Calculation from './domain/Calculation';

function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function render({ accumulator, number, operator }) {
  function clickNumberHandler({ value }) {
    render(new Calculation(accumulator, number*10+value, operator));
  }

  function clickOperatorHandler({ value }) {
    render(new Calculation(calculator(accumulator, number, operator), 0, value));
  }

  const element = (
    <div>
      <p>간단 계산기</p>
      <div>{number || accumulator}</div>
      <div>
        {Numbers.map((num) => (
          <button onClick={() => clickNumberHandler({ value: num })}>
            {num}
          </button>
        ))}
      </div>
      <div>
        {Operators.map((calculation) => (
          <button onClick={() => clickOperatorHandler({ value: calculation })}>
            {calculation}
          </button>
        ))}
      </div>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render(new Calculation(0, 0, ''));
