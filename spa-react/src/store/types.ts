import { IUser } from "src/components/Table/types";

export interface IUserStore {
  isAuthorized: string | null | void;
  token: string | null;
  email: string | null;
  id: string;
  name: string | null;
}

export interface IInitialState {
  users: IUser[];
}
