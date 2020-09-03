import React from 'react';
import ProjectCard from './ProjectCard';
import desktop from '../../assets/img/iMacDesktop.png';
import logo from '../../assets/img/prj/ds_logo_ai.png';
import BrandStock from '../../assets/img/prj/BrandStock.png';
import dsPortfolioFigma from '../../assets/img/prj/ds_portfolio_figma.png';
import MelborneCity from '../../assets/img/prj/MelborneCity.mp4';

// Carousel
class Project extends React.Component {
  render() {
    return (
      <div className='side__box'>
        {/* <ProjectCard card_number={logo} /> */}
        <img src={logo} className='pb__slide__show' />
        <img src={desktop} className='pb__image__block' />
      </div>
    );
  }
}

export default Project;
