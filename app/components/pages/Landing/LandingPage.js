import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <div className="container">
        <h1>Landing</h1>
        <Link to="/category">Category</Link>
      </div>
    );
  }
}

export default LandingPage;
