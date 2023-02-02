import { useGetUpdateFromDB } from "src/hooks";
import {
  ContainerSC,
  DecriptionSC,
  MessageSC,
  PictureSC,
  UserSC,
} from "./style";
import { IProps } from "./types";

export const User = ({ user, handleSelect, setOpen }: IProps) => {
  const { message } = useGetUpdateFromDB();

  const onClick = () => {
    handleSelect(user.id);
    setOpen(false);
  };

  return (
    <ContainerSC key={user.id}>
      <PictureSC>{user.name[0].charAt(0).toUpperCase()}</PictureSC>
      <DecriptionSC>
        <UserSC onClick={onClick}>{user.name}</UserSC>
        <MessageSC>{message ? message : "No messages yet..."}</MessageSC>
      </DecriptionSC>
    </ContainerSC>
  );
};
