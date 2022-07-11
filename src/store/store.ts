import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {UsersSlice} from "./reducers/UsersSlice";

export const store = configureStore({
  reducer: {
    users: UsersSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
