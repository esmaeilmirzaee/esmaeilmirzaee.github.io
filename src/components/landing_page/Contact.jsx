import React from 'react';
import { Typography, CardActions, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  contactsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginTop: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbf0fa',
    padding: '1em 0.1em',
    borderRadius: '1em',
  },
}));

function Contact() {
  const classes = useStyle();
  return (
    <Container className={classes.contactsContainer}>
      <Typography>
        Do you have any project in mind? Shoot me an email, we can talk to make
        it happen.{' '}
      </Typography>
      <CardActions>
        <Button
          variant='outlinedPrimary'
          textSize='large'
          style={{ position: 'relative', bottom: '0' }}
        >
          Contact ME
        </Button>
      </CardActions>
    </Container>
  );
}

export default Contact;
