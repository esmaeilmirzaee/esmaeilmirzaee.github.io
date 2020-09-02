// TODO: Choose a better name
import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MenuNavbar() {
  const [select, setSelect] = useState(0);
  return (
    <React.Fragment>
      <Tabs className='tabs__container' value={select}>
        <Tab
          className='tab'
          label='Home'
          aria-label='home'
          component={Link}
          to='/'
          onClick={() => setSelect(0)}
        />
        <Tab
          className='tab'
          label='Posts'
          aria-label='posts'
          component={Link}
          to='/posts'
          onClick={() => setSelect(1)}
        />
      </Tabs>
    </React.Fragment>
  );
}
