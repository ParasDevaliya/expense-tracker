export interface Error {
  message: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  mobile: string | null;
  createdAt: Date;
}
