import { configureStore } from "@reduxjs/toolkit";
import { saveState, loadState } from "./localStorage";
import todoReducer from "./TodoSlice/todoSlice";
import {throttle} from "lodash";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
