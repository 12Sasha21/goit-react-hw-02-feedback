import React from 'react';
import './Feedback.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <ul className="feedback_list">
      {options.map(option => (
        <li key={option} className="feedback_item">
          <button type="submit" className="btn" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default FeedbackOptions;
