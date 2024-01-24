import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './redux/configureStore';
import AppNavigation from './navigation/AppNavigation';

const {persistor, store} = configureStore();

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

/* Export
============================================================================= */
export default App;
