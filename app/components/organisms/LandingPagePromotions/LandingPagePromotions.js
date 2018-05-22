import React from 'react';
import LandingPagePromotionItem from '../../molecules/LandingPagePromotionItem/LandingPagePromotionItem';

/*
  The component renders the landing page promotions section.
 */
const LandingPagePromotions = () => (
  <section className="landing-promotions">
    <LandingPagePromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
    <LandingPagePromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
    <LandingPagePromotionItem
      title="Click & Collect"
      subtitle="order online and collect in store"
      image="https://i1.lmsin.net/website_images/ae/icons/ic-click-and-collect.svg"
    />
  </section>
);

export default LandingPagePromotions;
