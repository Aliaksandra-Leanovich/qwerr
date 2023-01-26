import { IUser } from "../Sidebar/types";

export interface IProps {
  user: IUser;
  handleSelect: (value: string) => void;
}
