import { rootReducer } from 'reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const createConfig = () => {
  const store = createStore(
    rootReducer,
    process.env.NODE_ENV === 'development' && composeWithDevTools(applyMiddleware(logger)),
  );
  return store;
};
export default createConfig;
