import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducerPath from "./reducer";

function storeConfig() {
  let store = createStore(reducerPath, applyMiddleware(thunkMiddleware));
  return { store };
}

export default storeConfig;
