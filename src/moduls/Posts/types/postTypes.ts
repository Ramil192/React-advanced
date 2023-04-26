export interface IPost {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  limit: number;
  currentPage: number;
}

interface CustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  body: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export interface IFilter {
  query: string;
  sort: sort;
}

export type sort = 'title' | 'body' | '';

export interface IComments {
  id: number;
  email: string;
  body: string;
}
