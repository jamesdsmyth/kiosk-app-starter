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

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
