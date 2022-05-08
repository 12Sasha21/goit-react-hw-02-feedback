import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => <p className="notification">{message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
