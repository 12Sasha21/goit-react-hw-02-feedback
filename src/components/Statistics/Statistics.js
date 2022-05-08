import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className="statistics_item">Good: {good}</p>
    <p className="statistics_item">Neutral: {neutral}</p>
    <p className="statistics_item">Bad: {bad}</p>
    <p className="statistics_item">Total: {total}</p>
    <p className="statistics_item">Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
