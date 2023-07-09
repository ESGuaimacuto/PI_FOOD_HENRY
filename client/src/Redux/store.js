import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);
