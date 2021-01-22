import React from 'react';

const Controls = ({ onIncrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Good
    </button>
    <button type="button" onClick={onIncrement}>
      Neutral
    </button>
    <button type="button" onClick={onIncrement}>
      Bad
    </button>
  </div>
);

export default Controls;
