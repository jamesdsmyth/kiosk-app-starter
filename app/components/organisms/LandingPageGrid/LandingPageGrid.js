import React from 'react';
import LandingPageGridItem from '../../molecules/LandingPageGridItem/LandingPageGridItem';

/*
  The component renders a landing page grid.
 */
const LandingPageGrid = () => (
  <div>
    <section className="grid grid__3">
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid__4">
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid__7">
      <LandingPageGridItem isPrimary size={7} />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid__10">
      <LandingPageGridItem isPrimary size={10} />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
  </div>
);

export default LandingPageGrid;
