import React from 'react';

const CalcDisplay = ({ display }) => {
  return (
    <div className='calculator-display'>
      <p>{display.length === 0 ? 0 : display.join(' ')}</p>
    </div>
  );
}

export default CalcDisplay;
