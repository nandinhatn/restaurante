import React from 'react';
import {Provider} from 'react-redux'
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import theme from './theme';
import reset from 'styled-reset/lib';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>

    <ThemeProvider theme={theme}>

      <Home/>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
