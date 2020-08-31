import React from 'react';
import { Container, Card, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FcBinoculars } from 'react-icons/fc';

import Button from '@material-ui/core/Button';

import Project from './Project';

function Projects() {
  return (
    <Container
      className='projects__container'
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Card className='projects__text'>
        <CardContent>
          <Typography variant='h5'>Recent and experimental works</Typography>
          <FcBinoculars style={{ fontSize: '4em' }} />
          <Typography color='textSecondary' raised={true} gutterBottom>
            some of my experimental works that are related to design and
            developing
          </Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi
            a quam molestias? Voluptate doloribus error id eaque. Eos quis
            exercitationem doloribus provident assumenda dolorum autem, totam
            voluptatum vitae fugiat.
          </Typography>
        </CardContent>
        <CardActions
          className='learn__more'
          style={{ backgroundColor: '#ff9d00' }}
        >
          <Button size='small' style={{ color: 'white' }}>
            Learn more...
          </Button>
        </CardActions>
      </Card>
      <Project className='projects__carousel' />
    </Container>
  );
}

export default Projects;
