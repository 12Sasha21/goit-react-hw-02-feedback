import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p className="item">Good: {good}</p>
      <p className="item">Neutral: {neutral}</p>
      <p className="item">Bad: {bad}</p>
      <p className="item">Total: {total}</p>
      <p className="item">Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
