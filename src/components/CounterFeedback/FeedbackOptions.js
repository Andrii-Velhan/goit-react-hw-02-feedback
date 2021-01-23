import React from 'react';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  // const [] = options;
  // const { good, neutral, bad } = options;
  const buttonType = Object.keys(options);
  return (
    <div className="Counter__controls">
      {buttonType.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
