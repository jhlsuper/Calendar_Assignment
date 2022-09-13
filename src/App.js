import React from 'react';

import Calendar from './components/Calendar';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
};

export default App;
