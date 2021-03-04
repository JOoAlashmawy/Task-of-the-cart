import { combineReducers } from "redux";

import posts from "./posts";
import cart from "./cart";

export const reducers = combineReducers({ posts, cart });
