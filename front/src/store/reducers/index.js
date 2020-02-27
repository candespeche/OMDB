import { combineReducers } from "redux";
import moviesReducers from "./moviesReducers";
import userReducer from "./usersReducer";

export default combineReducers({
  movies: moviesReducers,
  users: userReducer
});
