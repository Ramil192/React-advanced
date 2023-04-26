import { createSlice } from '@reduxjs/toolkit';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}

const initialState: IPostState = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
