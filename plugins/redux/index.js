import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../../src/reduxs/app.redux";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
