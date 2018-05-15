import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*
  The component renders the category page.
 */
class CategoryPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Category</h1>
        <Link to="/">landing</Link>
      </div>
    );
  }
}

export default CategoryPage;
