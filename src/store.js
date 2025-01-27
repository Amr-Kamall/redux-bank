import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";
import { thunk } from "redux-thunk";

//for create more than one reducer func
const rootStore = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
export const Store = createStore(rootStore, applyMiddleware(thunk));
