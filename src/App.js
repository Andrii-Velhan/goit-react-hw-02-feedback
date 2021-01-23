import React, { Component } from 'react';
import Container from '../src/components/Container/Container';
import Section from '../src/components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from '../src/components/Statistics/Statistics';
import Notification from '../src/components/Notification/Notification';
import './App.css';
export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

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

    return (
      <div className="App">
        <Container className="">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
              // <ul>
              //   <li>Good: {this.state.good}</li>
              //   <li>Neutral: {this.state.neutral}</li>
              //   <li>Bad: {this.state.bad}</li>
              //   <li>Total: {total}</li>
              //   <li>Positive feedback: {positiveFeedback}</li>
              // </ul>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positiveFeedback}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
          {/* <Statistics title="Statistics+++" stats={this.state} /> */}
        </Container>
      </div>
    );
  }
}
