export interface IDate {
  [key: string]: {
    date: { seconds: number; nanoseconds: number };
  };
}

export interface IMessage {
  date: string;
  id: string;
  message: string;
  sender: {
    name: string;
    email: string;
    id: string;
  };
  receivers: [];
}

export interface IProps {
  message: IMessage;
  handleEdit: (value: IMessage) => void;
}
