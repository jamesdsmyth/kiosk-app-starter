import React from 'react';
import PropTypes from 'prop-types';

/*
  The component renders the landing page promotions section.
 */
const LandingPromotionItem = ({ title, subtitle, image }) => (
  <div className="promotion-item">
    <img
      src={image}
      className="promotion-image"
      alt={title}
    />
    <div className="promotion-text">
      <span className="promotion-title">
        {title}
      </span>
      <span className="promotion-subtitle">
        {subtitle}
      </span>
    </div>
  </div>
);

LandingPromotionItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default LandingPromotionItem;
