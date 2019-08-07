import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

// the middlewares the Store is expecting from redux is an array
const middlewares = [logger];

// export store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// allows our Browser to actually cache our Store depending on config options
export const persistor = persistStore(store);

export default { store, persistor };
