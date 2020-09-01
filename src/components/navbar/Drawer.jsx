import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Drawer() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        style={{ backgroundColor: 'black', color: 'black', marginLeft: 'auto' }}
      >
        <List disablePadding>
          <ListItem button component={Link} to='/'>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  );
}
