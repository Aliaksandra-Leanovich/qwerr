export interface IProps {
  edit: boolean;
  messageId: string;
  setEdit: (value: boolean) => void;
  setMessageId: (value: string) => void;
}
