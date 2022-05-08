import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button type="buttom" onClick={onGood}>
      Good
    </button>
    <button type="buttom" onClick={onNeutral}>
      Neutral
    </button>
    <button type="buttom" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
