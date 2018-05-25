import React, { Component } from 'react';
import LandingGrid from '../../organisms/LandingGrid/LandingGrid';
import LandingPromotions from '../../organisms/LandingPromotions/LandingPromotions';
import ResultsGrid from '../../organisms/ResultsGrid/ResultsGrid';
import Button from '../../atoms/Button/Button';
import CategoryPageGrid from '../../organisms/CategoryPageGrid/CategoryPageGrid';

/*
  The component renders the landing page.
 */
class Landing extends Component<Props> {
  render() {
    return (
      <main className="main">
        <LandingGrid />
        <LandingPromotions />
        <Button
          type="primary"
          onClick={() => console.log('clicked the button')}
          text="Primary button"
        />
        <Button
          type="secondary"
          onClick={() => console.log('clicked the button')}
          text="Secondary button"
        />
        <Button
          type="tertiary"
          onClick={() => console.log('clicked the button')}
          text="Tertiary button"
        />
        <h1 className="page-heading">
          Living Room
        </h1>
        <CategoryPageGrid />
        <ResultsGrid />
      </main>
    );
  }
}

export default Landing;
