import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// the middlewares the Store is expecting from redux is an array
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

// export store
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// run saga
sagaMiddleware.run(rootSaga);

// allows our Browser to actually cache our Store depending on config options
export const persistor = persistStore(store);

export default { store, persistor };
