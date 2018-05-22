import React from 'react';
import PropTypes from 'prop-types';

/*
  The component renders a button.
 */
const Button = ({
  type,
  text,
  onClick,
  disabled
}) => (
  <button
    type="button"
    className={`button button--${type}`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

/*
  The button type needs to be one of the following.
 */
const buttonTypes = ['primary', 'secondary', 'tertiary'];

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  type: PropTypes.oneOf(buttonTypes).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
