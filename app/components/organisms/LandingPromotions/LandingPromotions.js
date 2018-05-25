import React from 'react';
import LandingPromotionItem from '../../molecules/LandingPromotionItem/LandingPromotionItem';

/*
  The component renders the landing page promotions section.
 */
const LandingPromotions = () => (
  <section className="landing-promotions">
    <LandingPromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
    <LandingPromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
    <LandingPromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
  </section>
);

export default LandingPromotions;
