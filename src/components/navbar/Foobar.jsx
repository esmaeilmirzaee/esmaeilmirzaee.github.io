import React from 'react';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import SocialNetwork from '../SocialNetwork';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Foobar() {
  let year = new Date().getFullYear();

  return (
    <Container className='footer' maxWidth={false}>
      <Typography className='invisible__footer' variant='subtitle1'>
        Living. Learning. & Leveling up one day at a time.
      </Typography>
      <Typography variant='subtitle2'>
        The current page is inspired by{' '}
        <a
          href={'https://www.mattfarley.ca/'}
          target='_blank'
          style={{
            color: '#7510f7',
            textDecoration: 'none',
          }}
        >
          Matt
        </a>
      </Typography>
      <SocialNetwork />
      <div className='invisible__footer'>
        <Typography variant='body2'>
          <FaQuoteLeft /> Handcrafted by{' '}
        </Typography>
      </div>
      <Typography display='inline' variant='subtitle2'>
        Esmaeil MIRZAEE
      </Typography>{' '}
      <span style={{ color: '#000' }}>@ {year}</span>{' '}
      <FaQuoteRight className='invisible__footer' style={{ color: '#000' }} />
    </Container>
  );
}

export default Foobar;
