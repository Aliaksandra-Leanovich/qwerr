import { ContainerSC, PictureSC, UserSC } from "./style";
import { IProps } from "./types";

export const User = ({ user, handleSelect }: IProps) => {
  const onClick = () => {
    handleSelect(user.id);
  };

  return (
    <ContainerSC key={user.id}>
      <PictureSC>{user.name[0].charAt(0).toUpperCase()}</PictureSC>
      <UserSC onClick={onClick}>{user.name}</UserSC>
    </ContainerSC>
  );
};
