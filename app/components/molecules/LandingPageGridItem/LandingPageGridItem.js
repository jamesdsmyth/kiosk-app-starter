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
  const classes = isPrimary ? `primary-grid-item__${size}` : null;
  const subtitleElement = isPrimary ? <span>{subtitle}</span> : null;
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
        <h2>{title}</h2>
        {subtitleElement}
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
