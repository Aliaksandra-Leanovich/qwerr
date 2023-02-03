import { IUser } from "../Sidebar/types";

export interface IProps {
  user: IUser;
  message: string;
  handleSelect: (value: string) => void;
  setOpen: (value: boolean) => void;
}
