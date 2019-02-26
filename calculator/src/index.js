import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from "./App.js";
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { changeRoute} from './reducers'
import "tachyons";
import "./index.css";


const logger = createLogger()

const rootReducers = combineReducers({changeRoute})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById("root")
);

