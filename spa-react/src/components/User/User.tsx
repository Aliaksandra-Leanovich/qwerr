import {
  ContainerSC,
  DecriptionSC,
  MessageSC,
  PictureSC,
  UserSC,
} from "./style";
import { IProps } from "./types";

export const User = ({ user, handleSelect, setOpen, message }: IProps) => {
  const onClick = () => {
    handleSelect(user.uid);
    setOpen(false);
  };

  return (
    <ContainerSC key={user?.uid}>
      <PictureSC>{user?.name[0].charAt(0).toUpperCase()}</PictureSC>
      <DecriptionSC>
        <UserSC onClick={onClick}>{user?.name}</UserSC>
        <MessageSC>{message ? message : "No messages yet..."}</MessageSC>
      </DecriptionSC>
    </ContainerSC>
  );
};
