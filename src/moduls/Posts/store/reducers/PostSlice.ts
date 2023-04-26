import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost, IPostState } from '../../types/postTypes';

const initialState: IPostState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost(state, action: PayloadAction<IPost>) {
      state.posts.unshift(action.payload);
    },
    addPostApi(state, action: PayloadAction<IPost[]>) {
      state.posts.push.apply(state.posts, action.payload);
    },
    removePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export default postsSlice.reducer;
