export interface IUser {
  login: string;
  password: string;
}

interface CustomElements extends HTMLFormControlsCollection {
  login: HTMLInputElement;
  password: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
