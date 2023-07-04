// index.js
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore } from 'redux-persist'; // Import persistStore
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import reducers from './sources/redux/reducers';
import App from './App';
import { name as appName } from './app.json';

const store = createStore(reducers);
const persistor = persistStore(store); // Create a persistor

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
