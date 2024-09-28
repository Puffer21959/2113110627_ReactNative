import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/auth-slice";

export const store = configureStore({
  reducer: {
    authState: authReducer,
  },
});

//Infer the 'RootState' and 'AppDispatch' type from store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred Type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
