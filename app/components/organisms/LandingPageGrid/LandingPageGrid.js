import React from 'react';
import LandingPageGridItem from '../../molecules/LandingPageGridItem/LandingPageGridItem';

const LandingPageGrid = () => (
  <div>
    <section className="grid grid--3">
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid--4">
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid--7">
      <LandingPageGridItem isPrimary size={7} />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
      <LandingPageGridItem />
    </section>
    <section className="grid grid--7">
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
