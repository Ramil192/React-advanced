import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPost, IPostState } from '../../types/postTypes';

const initialState: IPostState = {
  posts: [
    {
      id: 1,
      title: 'Javascript',
      body: 'Description',
    },
    {
      id: 2,
      title: 'React',
      body: 'Description',
    },
    {
      id: 3,
      title: 'TypeScript',
      body: 'Description',
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
