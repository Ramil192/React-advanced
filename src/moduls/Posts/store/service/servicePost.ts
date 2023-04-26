import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IComments, IPost } from '../../types/postTypes';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<
      { postsApi: IPost[]; totalCount: number },
      { limit: number; page: number }
    >({
      query: ({ limit = 5, page = 1 }) => ({
        url: '/posts',
        params: {
          _page: page,
          _limit: limit,
        },
      }),
      transformResponse: (postsApi: IPost[], meta) => {
        return {
          postsApi,
          totalCount: Number(meta!.response!.headers.get('X-Total-Count')),
        };
      },
    }),
    fetchPost: build.query<IPost, string>({
      query: (id: string) => ({
        url: `/posts/${id}`,
      }),
    }),
    fetchPostComments: build.query<IComments[], string>({
      query: (id: string) => ({
        url: `/posts/${id}/comments`,
      }),
    }),
  }),
});
