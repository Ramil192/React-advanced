export interface IPost {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
}