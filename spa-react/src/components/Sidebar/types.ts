export interface IUser {
  uid: string;
  email: string;
  name: string;
}

export interface IUsers {
  uid: string;
  email: string;
  name: string;
  status: string;
}

export interface IStylesProps {
  isOpen: boolean;
}
export interface IProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export interface IChat {
  createdAt: string;
  lastMessage: string;
  participants: any;
  updatedAt: string;
}
