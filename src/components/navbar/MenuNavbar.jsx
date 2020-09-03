// TODO: Choose a better name
import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MenuNavbar(props) {
  const handleClick = (id) => {
    props.setSelectedTab(id);
  };
  return (
    <React.Fragment>
      <Tabs className='tabs__container' value={props.selectedTab}>
        <Tab
          className='tab'
          label='Home'
          aria-label='home'
          component={Link}
          to='/'
          onClick={() => props.setSelectedTab(0)}
        />
        <Tab
          className='tab'
          label='Posts'
          aria-label='posts'
          component={Link}
          to='/posts'
          onClick={() => props.setSelectedTab(1)}
        />
      </Tabs>
    </React.Fragment>
  );
}
