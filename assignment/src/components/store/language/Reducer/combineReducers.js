import { combineReducers } from "redux";
import langReducer from "./ReducerLang";
import moviesReducer from "./moviesReducer";

export default combineReducers({
    lang:langReducer,
    movies:moviesReducer
})