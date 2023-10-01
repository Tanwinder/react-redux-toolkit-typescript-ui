import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../redux/hooks'

// Define a type for the slice state
interface postsState {
  posts: string[];
}

// Define the initial state using that type
const initialState: postsState = {
  posts: ["hello first post"],
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts.splice(action.payload, 1);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
