import React from 'react';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ApolloProvider } from '@apollo/client';

import App from './App';

import Store from './redux/store';

import client from './apollo';

const { store, persistor } = Store();

export default function Config() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ApolloProvider>

  );
}
