// TODO: Choose a better name
import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MenuNavbar() {
  return (
    <React.Fragment>
      <Tabs className='tabs__container'>
        <Tab
          className='tab'
          label='Home'
          aria-label='home'
          component={Link}
          to='/'
          disableGutters
          disableRipple
        />
        <Tab
          className='tab'
          label='Posts'
          aria-label='posts'
          component={Link}
          to='/posts'
        />
      </Tabs>
    </React.Fragment>
  );
}
