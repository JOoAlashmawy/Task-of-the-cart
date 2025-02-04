/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
export default (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
