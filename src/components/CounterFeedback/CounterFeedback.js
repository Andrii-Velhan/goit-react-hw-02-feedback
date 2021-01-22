import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
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
    value: this.props.initialValue,
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  // handleIncrement = type => {
  //   this.setState(prevState => ({
  //     [type]: prevState[type] + 1,
  //   }));
  // };

  render() {
    const { value } = this.state;

    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="Counter">
          <Value value={value} />

          <Controls onIncrement={this.handleIncrement} />
        </div>
      </>
    );
  }
}

export default CounterFeedback;
