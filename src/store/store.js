import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootModule from '../modules/rootModules';

const thunk = ({ dispatch, getState }) => next => action =>
	typeof action === 'function' ? action(dispatch, getState) : next(action);

const logger = createLogger();

const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootModule, enhancer);

export default store;
