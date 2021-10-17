import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const buttons = Object.keys(options);
  return (
    <>
      {buttons.map(button => (
        <button
          className={`${s[button]}`}
          key={button}
          name={button}
          type="button"
          onClick={onLeaveFeedback}
        >
          {button[0].toUpperCase() + button.slice(1)}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
