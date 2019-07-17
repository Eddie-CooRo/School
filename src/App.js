import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Counter from './Components/Counter';

const App = () => (
  <Provider store={Store}>
    <Counter />
  </Provider>
);

export default App;
