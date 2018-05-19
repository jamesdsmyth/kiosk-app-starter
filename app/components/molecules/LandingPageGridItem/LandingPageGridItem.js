import React from 'react';
import PropTypes from 'prop-types';

/*
  The component renders a landing page grid item.
 */
const LandingPageGridItem = ({ isPrimary, size }) => {
  const classes = isPrimary ? `primary-grid-item--${size}` : null;
  return (
    <div className={`grid-item ${classes}`}>
      grid item
    </div>
  );
};

LandingPageGridItem.defaultProps = {
  isPrimary: false,
  size: null
};

LandingPageGridItem.propTypes = {
  isPrimary: PropTypes.bool,
  size: PropTypes.number
};

export default LandingPageGridItem;
