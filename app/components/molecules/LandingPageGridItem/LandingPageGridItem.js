import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/*
  The component renders a landing page grid item.
 */
const LandingPageGridItem = ({
  title,
  subtitle,
  image,
  urlLink,
  isPrimary,
  size
}) => {
  const classes = isPrimary ? `primary-grid-item primary-grid-item__${size}` : '';
  const itemStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className={`grid-item ${classes}`}
      style={itemStyle}
    >
      <Link
        to={urlLink}
        className="link-wrapper"
      >
        <div className="grid-item-content">
          {
            isPrimary && <span>{subtitle}</span>
          }
          <h2>
            {title}
          </h2>
          {
            isPrimary && <span className="grid-item-link">Show now</span>
          }
        </div>
      </Link>
    </div>
  );
};

LandingPageGridItem.defaultProps = {
  subtitle: '',
  isPrimary: false,
  size: null
};

LandingPageGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  size: PropTypes.number
};

export default LandingPageGridItem;
