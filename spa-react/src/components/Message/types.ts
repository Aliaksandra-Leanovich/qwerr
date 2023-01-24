export interface IDate {
  [key: string]: {
    date: { seconds: number; nanoseconds: number };
  };
}

export interface IMessage {
  date: { seconds: number; nanoseconds: number };
  id: string;
  message: string;
  senderEmail: string;
  senderName: string;
  receivers: [];
}

export interface IProps {
  message: IMessage;
  handleDelete: (value: IMessage) => void;
  handleEdit: (value: IMessage) => void;
}
