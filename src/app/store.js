import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/countriesSlice";

export const store = configureStore({
  reducer: {
    country: counterReducer,
  },
});
