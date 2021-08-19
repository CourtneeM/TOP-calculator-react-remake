import React from 'react';

const CalcBody = ({ action }) => {
  return (
    <div className='calculator-body'>
        <button className='sm' value='clear' onClick={e => action(e.target.value)}>C</button>
        <button className='sm' value='delete' onClick={e => action(e.target.value)}>DEL</button>
        <button className='sm' value='/' onClick={e => action(e.target.value)}>/</button>
        <button className='sm' value='*' onClick={e => action(e.target.value)}>X</button>

        <button className='sm' value='7' onClick={e => action(e.target.value)}>7</button>
        <button className='sm' value='8' onClick={e => action(e.target.value)}>8</button>
        <button className='sm' value='9' onClick={e => action(e.target.value)}>9</button>
        <button className='sm' value='-' onClick={e => action(e.target.value)}>-</button>

        <button className='sm' value='4' onClick={e => action(e.target.value)}>4</button>
        <button className='sm' value='5' onClick={e => action(e.target.value)}>5</button>
        <button className='sm' value='6' onClick={e => action(e.target.value)}>6</button>
        <button className='sm' value='+' onClick={e => action(e.target.value)}>+</button>

        <button className='sm' value='1' onClick={e => action(e.target.value)}>1</button>
        <button className='sm' value='2' onClick={e => action(e.target.value)}>2</button>
        <button className='sm' value='3' onClick={e => action(e.target.value)}>3</button>
        <button className='tall' value='=' onClick={e => action(e.target.value)}>=</button>

        <button className='wide' value='0' onClick={e => action(e.target.value)}>0</button>
        <button className='sm' value='.' onClick={e => action(e.target.value)}>.</button>
    </div>
  );
}

export default CalcBody;
