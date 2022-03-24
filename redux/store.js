import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import storage from '@/redux/sync_storage';

import rootReducer from '@/redux/rootReducer';

// BINDING MIDDLEWARE
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([]));
  }
  // eslint-disable-next-line global-require
  const { persistStore, persistReducer } = require('redux-persist');

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['lottery'],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    bindMiddleware([]),
  );

  // eslint-disable-next-line no-underscore-dangle
  store.__persistor = persistStore(store);

  return store;
};

export default {
  wrapper: createWrapper(makeStore, { debug: true }),
  makeStore,
};
