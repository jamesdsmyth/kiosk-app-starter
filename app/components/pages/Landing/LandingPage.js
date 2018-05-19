import React, { Component } from 'react';
import LandingPageGrid from '../../organisms/LandingPageGrid/LandingPageGrid';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <div className="container">
        <LandingPageGrid />
      </div>
    );
  }
}

export default LandingPage;
