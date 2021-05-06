import { combineReducers } from "@reduxjs/toolkit";
import posts from "../slice/postsSlice";

export const rootReducer = combineReducers({
  posts,
});
