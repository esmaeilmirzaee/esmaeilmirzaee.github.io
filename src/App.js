import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appbar from './components/navbar/Appbar';
import Foobar from './components/navbar/Foobar';
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
import { Paper } from '@material-ui/core/';
import Home from './components/pages/Home';
import About from './components/pages/About';

import Hero from './components/home_page_sections/Hero';
import Objective from './components/home_page_sections/ObjectiveHero';
import Cards from './components/experience_cards/Cards';
import Projects from './components/recent_projects/Projects';
import MidMainImage from './components/MidMainImage';
import Contact from './components/contacts/Contact';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const themeMode = true;
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            light: '#FF9D00',
            main: '#F9A826',
            dark: '#EB9100',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          type: 'light',
        },
        typography: {
          fontFamily: [
            'Playfair Display',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Appbar />
        <div className='container'>
          <Switch>
            <Route path='/about' render={(props) => <About {...props} />} />
            <Route from='/' render={(props) => <Home {...props} />} />
          </Switch>
          <Hero />
          <Objective />
          <Cards />
          {/* <MidMainImage style={{ width: '100vw', maxHeight: '400px' }} /> */}
          {/* <Projects style={{ visibility: 'hidden' }} /> */}
          <Contact />
        </div>
        <Foobar background='main' />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
