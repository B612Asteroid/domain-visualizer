import { configureStore } from "@reduxjs/toolkit";
import domainReducer from "../features/domain/domainSlice";

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
