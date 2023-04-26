import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost, IPostState } from '../../types/postTypes';

const initialState: IPostState = {
  posts: [
    {
      id: 1,
      title: 'a',
      body: 'aaa',
    },
    {
      id: 2,
      title: 'aa',
      body: 'aa',
    },
    {
      id: 3,
      title: 'aaa',
      body: 'a',
    },
  ],
  isLoading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

export default postsSlice.reducer;
