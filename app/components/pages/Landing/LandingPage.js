import React, { Component } from 'react';
import LandingPageGrid from '../../organisms/LandingPageGrid/LandingPageGrid';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <div className="container">
        <h1>Main</h1>
        <LandingPageGrid />
      </div>
    );
  }
}

export default LandingPage;
