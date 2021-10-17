import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <ul className={s.list}>
        <li className={s.good}>Good: {good}</li>
        <li className={s.neutral}>Neutral: {neutral}</li>
        <li className={s.bad}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.positive}>Positive Feedback: {positivePercentage}%</li>
      </ul>
    </>
  );
}

Statistics.defaultProps = {
  positivePercentage: 0,
  total: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
