export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IChat {
  [key: string]: {
    date: { seconds: number; nanoseconds: number };
    lastMessage: {
      message: string;
    };
  };
}

export interface IUsers {
  id: string;
  email: string;
  name: string;
}
