import React from 'react';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import SocialNetwork from '../SocialNetwork';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Foobar() {
  let year = new Date().getFullYear();

  return (
    <Container className='footer' maxWidth={false}>
      <Typography
        className='invisible__footer'
        color='primary'
        variant='subtitle1'
      >
        Living. Learning. & Leveling up one day at a time.
      </Typography>
      <Typography color='secondary' variant='subtitle2'>
        The current page is inspired by https://mattfarley.ca/
      </Typography>
      <SocialNetwork />
      <div className='invisible__footer'>
        <Typography color='primary' variant='body2'>
          <FaQuoteLeft color='primary' /> Handcrafted by{' '}
        </Typography>
      </div>
      <Typography color='primary' display='inline' variant='subtitle2'>
        Esmaeil MIRZAEE
      </Typography>{' '}
      <span style={{ color: '#ff9d00' }}>@ {year}</span>{' '}
      <FaQuoteRight
        className='invisible__footer'
        color='primary'
        style={{ color: '#ff9d00' }}
      />
    </Container>
  );
}

export default Foobar;
