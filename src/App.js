import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appbar from './components/navbar/AppBarV2';
import Foobar from './components/navbar/Foobar';
import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
import { Paper } from '@material-ui/core/';
import Home from './components/pages/Home';
import About from './components/pages/About';
import LandingPage from './components/landing_page/LandingPage';
import Posts from './components/blogs_post/Posts';

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
      <Paper style={{ height: '100vh' }}>
        <Appbar />
        <div className='container'>
          <Switch>
            <Route path='/posts' component={Posts} />
            <Route path='/about' render={(props) => <About {...props} />} />
            <Route from='/' component={LandingPage} />
          </Switch>
        </div>
        <Foobar
          style={{
            display: 'flex',
            position: 'relative',
            bottom: '0',
            left: '0',
          }}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
