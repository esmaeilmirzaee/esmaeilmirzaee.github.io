import React from 'react';
import { Typography, CardActions, Button } from '@material-ui/core';

function Contact() {
  return (
    <div className='contacts__container'>
      <Typography>
        Do you have any project in mind? Shoot me an email, we can talk to make
        it happen.{' '}
      </Typography>
      <CardActions>
        <Button
          className='contact__button'
          variant='outlinedPrimary'
          textSize='large'
        >
          Contact ME
        </Button>
      </CardActions>
    </div>
  );
}

export default Contact;
