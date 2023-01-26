export interface IUser {
  name: string;
  surname: string;
  id: string;
  date: string;
  sum: number;
}
export interface IDataProps {
  data: IUser[];
}

export interface IUserProps {
  user: IUser;
}
