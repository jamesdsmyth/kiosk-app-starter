import React from 'react';
import PropTypes from 'prop-types';

/*
  The component renders a landing page grid item.
 */
const LandingPageGridItem = ({ isPrimary }) => (
  <div className={`grid-item ${isPrimary ? 'primary-grid-item' : ''}`}>
    grid item
  </div>
);

LandingPageGridItem.defaultProps = {
  isPrimary: false
};

LandingPageGridItem.propTypes = {
  isPrimary: PropTypes.bool
};

export default LandingPageGridItem;
