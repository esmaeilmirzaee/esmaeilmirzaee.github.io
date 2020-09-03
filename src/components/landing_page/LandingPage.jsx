import React from 'react';
import Hero from './Hero';
import ObjectiveHero from './ObjectiveHero';
import Cards from './cards/Cards';
import Contact from './Contact';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <ObjectiveHero />
      <Cards />
      {/* <Contact /> */}
    </div>
  );
}
