import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryPageGridItem = ({
  title,
  image,
  urlLink
}) => {
  const itemStyle = {
    backgroundImage: `url(${image})`
  };

  return (
    <div
      className="grid-item"
      style={itemStyle}
    >
      <Link
        to={urlLink}
        className="link-wrapper"
      >
        <div className="grid-item-content">
          <h2 className="grid-item-heading--category">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

CategoryPageGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  urlLink: PropTypes.string.isRequired,
};

export default CategoryPageGridItem;

