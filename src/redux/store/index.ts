import { createStore, Store } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from '../reducers/index';

const persistConfig = {
  key: 'countries',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  const store: Store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
