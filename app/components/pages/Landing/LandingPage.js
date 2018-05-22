import React, { Component } from 'react';
import LandingPageGrid from '../../organisms/LandingPageGrid/LandingPageGrid';
import LandingPagePromotions from '../../organisms/LandingPagePromotions/LandingPagePromotions';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <main className="main">
        <LandingPageGrid />
        <LandingPagePromotions />
      </main>
    );
  }
}

export default LandingPage;
