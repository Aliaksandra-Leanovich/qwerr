import { IUser } from "src/components/Table/types";

export interface IUserStore {
  isAuthorized: string | null | void;
  token: string | null;
  email: string | null;
  id: string | null;
  name: string | null;
}

export interface IInitialState {
  users: IUser[];
}
