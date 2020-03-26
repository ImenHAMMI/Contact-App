import { createStore, applyMiddleware, compose } from "redux";
import { reducerContact } from "../reducers/reducerContact";
import thunk from "redux-thunk";

const middelWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducerContact,
  composeEnhancers(applyMiddleware(...middelWare))
);
