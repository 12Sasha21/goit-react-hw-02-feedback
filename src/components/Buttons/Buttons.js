import React from 'react';
import './Buttons.css';

const Buttons = ({ onGood, onNeutral, onBad }) => (
  <div className="feedback__btns">
    <button type="button" onClick={onGood}>
      Good
    </button>
    <button type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Buttons;
