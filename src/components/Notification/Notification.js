import React from 'react';
import s from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p className={s.message}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
