import React, { Component } from 'react';
import LandingPageGrid from '../../organisms/LandingPageGrid/LandingPageGrid';
import LandingPagePromotions from '../../organisms/LandingPagePromotions/LandingPagePromotions';
import Button from '../../atoms/Button/Button';

/*
  The component renders the landing page.
 */
class LandingPage extends Component<Props> {
  render() {
    return (
      <main className="main">
        <LandingPageGrid />
        <LandingPagePromotions />
        <Button
          type="primary"
          onClick={() => console.log('clicked the button')}
          text="Submit"
        />
      </main>
    );
  }
}

export default LandingPage;
