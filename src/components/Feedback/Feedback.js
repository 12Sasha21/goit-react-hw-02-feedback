import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div>
    <button type="submit" onClick={onGood}>
      Good
    </button>
    <button type="submit" onClick={onNeutral}>
      Neutral
    </button>
    <button type="submit" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
