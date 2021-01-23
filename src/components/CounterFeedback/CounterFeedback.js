import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
// import Value from './Value';
import Section from '../Section/Section';
import './CounterFeedback.css';

class CounterFeedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  // handleFeedback = () => {
  //   this.setState(prevState => ({
  //     value: prevState.value + 1,
  //   }));
  // };

  // countTotalFeedback()

  // countPositiveFeedbackPercentage()

  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round(
      (100 * this.state.good) / this.countTotalFeedback(),
    );
    return percentage > 0 ? percentage + '%' : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    console.log(this.state.good);

    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="Counter">
          <Section title="Please---------- leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statis--------tics">
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {total}</li>
              <li>Positive feedback: {positiveFeedback}</li>
              {/* {this.state.map(stat => (
                <li key={stat}>
                  <span>{stat}</span>
                  <span> %</span>
                </li>
              ))} */}
            </ul>
          </Section>
        </div>
      </>
    );
  }
}

export default CounterFeedback;
