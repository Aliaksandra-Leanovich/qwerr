export interface IDate {
  [key: string]: {
    date: { seconds: number; nanoseconds: number };
  };
}

export interface IMessage {
  createdAt: string;
  id: string;
  text: string;
  sender: {
    name: string;
    email: string;
    id: string;
  };
}

export interface IProps {
  message: IMessage;
  handleEdit: (value: IMessage) => void;
}
