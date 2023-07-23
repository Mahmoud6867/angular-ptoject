import { applyMiddleware, legacy_createStore as createStore } from "redux";
import langReducer from './Reducer/ReducerLang';
import thunk from "redux-thunk";

const store = createStore(langReducer,applyMiddleware(thunk))

export default store