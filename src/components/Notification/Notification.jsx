import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => <p className="notification">{message}</p>;
export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
