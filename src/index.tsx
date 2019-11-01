import * as React from 'react';
import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import App from 'app'
import { ThemeProvider } from 'Styles';

const Root = (
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

render(Root, document.getElementById('react-container'));