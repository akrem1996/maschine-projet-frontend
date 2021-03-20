import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import machineReducer from "./Reducer/machineReducer";

const rootReducer = combineReducers({machines: machineReducer})

const devToolsName = '__REDUX_DEVTOOLS_EXTENSION__';
const devTools = window[devToolsName] ? window[devToolsName]() : (f) => f;

export const store = createStore(rootReducer,compose(applyMiddleware(thunk),devTools))
