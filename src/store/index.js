import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/shop/reducer";

const reducers = combineReducers({ cart: cartReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
