import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import logo from '../../assets/img/my__avatar.svg';
import ElevationScroll from '../utilities/ElevationScroll';
import { Link } from 'react-router-dom';
import MenuNavbar from './MenuNavbar';
import { makeStyles } from '@material-ui/styles';
import Drawer from './Drawer';

const useStyle = makeStyles((theme) => ({
  appbar: {
    color: '#000',
    backgroundColor: '#fff9f2',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
}));

export default function AppBarV2() {
  const classes = useStyle();
  const theme = useTheme();
  const viewPortSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar className={classes.appbar}>
            <Button
              className={classes.logoContainer}
              component={Link}
              to='/'
              disableRipple
            >
              <img className='logo' src={logo} alt='' />
              <Typography className='logo__title' component='h6' variant='h5'>
                Esmaeil
              </Typography>
            </Button>

            {/* FIXME: The name is inappropriate */}
            <MenuNavbar />
            {/* {viewPortSize ? <Drawer /> : <MenuNavbar />} */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
}
