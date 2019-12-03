import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

//Сохранение состояния во время перезагрузки
import { save, load } from "redux-localstorage-simple"

import rootReducer from './reducers/index';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk,save(),logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, load(), initialState);
}
