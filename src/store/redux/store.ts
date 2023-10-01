import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import postsReducer from "../features/postSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },

  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recallCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
