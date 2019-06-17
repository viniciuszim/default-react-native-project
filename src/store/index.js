import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { offlineMiddleware, suspendSaga, consumeActionMiddleware } from 'redux-offline-queue';

import sagas from './sagas';
import reducers from './ducks';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [];
middlewares.push(sagaMiddleware); // Remove this line if you are using 'redux-offline-queue'
// Uncomment the lines below if you are using 'redux-offline-queue'
// middlewares.push(offlineMiddleware());
// middlewares.push(suspendSaga(sagaMiddleware));
// middlewares.push(consumeActionMiddleware());

const composer = __DEV__
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
