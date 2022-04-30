import React from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import './Feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    return (
      <div className="feedback">
        <h2>Please leave feedback</h2>
        <Buttons
          onGood={this.addGoodFeedback}
          onNeutral={this.addNeutralFeedback}
          onBad={this.addBadFeedback}
        />
        <h2>Statistics</h2>

        {this.countTotalFeedback() === 0 ? (
          'No feedback given'
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percent={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
