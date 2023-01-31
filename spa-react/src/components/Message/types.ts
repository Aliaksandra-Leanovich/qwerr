export interface IDate {
  [key: string]: {
    date: { seconds: number; nanoseconds: number };
  };
}

export interface IMessage {
  sendAt: string;
  id: string;
  message: string;
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
