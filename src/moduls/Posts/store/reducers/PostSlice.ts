import { createSlice } from '@reduxjs/toolkit';
import { IPostState } from '../../types/postTypes'



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
  reducers: {},
});

export default postsSlice.reducer;
