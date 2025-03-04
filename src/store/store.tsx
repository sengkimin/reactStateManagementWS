import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingslice";
import useReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    user: useReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
