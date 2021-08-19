import React, { useEffect, useState } from 'react';
import CalcDisplay from './components/CalcDisplay';
import CalcBody from './components/CalcBody';

const Calculator = () => {
  const [display, setDisplay] = useState([]);
  const [total, setTotal] = useState(0);

  const operators = ['+', '-', '*', '/'];

  const calculation = (operand1, operator, operand2) => {
    switch (operator) {
      case '+': return operand1 + operand2;
      case '-': return operand1 - operand2;
      case '*': return operand1 * operand2;
      case '/': return operand1 / operand2;
      default: console.error('Error calculating total.');
    }
  }

  const action = value => {
    if (operators.includes(value)) {
      if (display.length === 0) return;
      if (operators.includes(display[display.length - 1])) return;
    }

    if (value === 'clear') {
      updateDisplay('clear');
      return;
    }

    if (value === 'delete') {
      updateDisplay('delete');
      return;
    }

    if (value === '=') updateTotal();

    updateDisplay(value);
  }

  const updateTotal = () => {
    const [operand1, operator, operand2] = [...display];

    if (operand1 === undefined || operator === undefined || operand2 === undefined) return;

    if (operator === '/' && operand2 == 0) {
      console.error('Error, cannot divide by zero.')
      return;
    }

    setTotal((calculation(Number(operand1), operator, Number(operand2))).toFixed(2));
  }

  const updateDisplay = value => {
    const displayCopy = [...display];

    if (value === '=') {
      const [operand1, operator, operand2] = [...displayCopy];
      if (operand1 === undefined || operator === undefined || operand2 === undefined) return;

      setDisplay([total]);
      return;
    }

    if (value === 'clear') {
      setDisplay([]);
      return;
    }

    if (value === 'delete') {
      const displayCopy = [...display];
      const lastInput = displayCopy[displayCopy.length - 1];

      if (!lastInput) return;

      const updatedNum = lastInput.slice(0, lastInput.length - 1);

      displayCopy.splice(displayCopy.length - 1, 1, updatedNum);

      if (displayCopy[displayCopy.length - 1] === '') displayCopy.pop();

      setDisplay(displayCopy);
      return;
    }

    if (displayCopy.length === 0) {
      displayCopy.push(value);
      setDisplay(displayCopy);
    } else {
      const lastInput = displayCopy[displayCopy.length - 1];

      if (operators.includes(value) || operators.includes(lastInput)) {
        displayCopy.push(value);
      } else {
        displayCopy.splice(displayCopy.length - 1, 1, lastInput + value);
      }

      setDisplay(displayCopy);
    }
  }

  useEffect(() => {
    if (display.length >= 3 && operators.includes(display[display.length - 1])) {
      updateTotal();
    }
  }, [display]);

  useEffect(() => {
    if (total === 0 && display.length === 0) return;
    
    if (display.length >= 3) {
      setDisplay([total, display[display.length - 1]]);
    } else {
      setDisplay([total]);
    }
  }, [total])

  return (
    <div className='calculator-container'>
      <CalcDisplay display={display} />
      <CalcBody action={action} />
    </div>
  );
}

export default Calculator;
