import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { primaryTheme } from 'helpers/constants/themeConstants.js';
import { reduxStore } from 'stores/reduxStore.js';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.jsx';

const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Provider store={reduxStore}>
      <BrowserRouter basename="/">
        <ThemeProvider theme={primaryTheme}>
          <CssBaseline />
          <HelmetProvider>
          <App />
          </HelmetProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
