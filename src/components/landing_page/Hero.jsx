import React from 'react';
import myAvatar from '../../assets/img/my__avatar.svg';
import heroImage from '../../assets/img/hero__mac.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Typography } from '@material-ui/core';

export default function Hero() {
  return (
    <section className='hero'>
      <Typography className='hero__title' variant='h5'>
        Fullstack developer
      </Typography>
      <h3 className='hero__subtitle'>
        I design and code beautifully simple things and{' '}
        <span className='heart__icon'>
          <FavoriteIcon />
        </span>
        <span className='heart__text'>what I do.</span>
      </h3>
      <img src={myAvatar} alt="Esmaeil's Avatar" className='my__avatar' />
      <img src={heroImage} alt='a Mac computer' className='hero__image' />
    </section>
  );
}
