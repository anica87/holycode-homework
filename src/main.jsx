

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { createRoot } from 'react-dom/client';

import store from './redux/store';

import './index.css';
import App from './App';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);
