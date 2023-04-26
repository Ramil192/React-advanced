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

interface CustomElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  body: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
