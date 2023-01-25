import React from "react";
import { StatusCircleSC } from "../SelectStatus/style";
import { IUser } from "../Sidebar/types";
import { ContainerSC, PictureSC, StatusContainerSC, UserSC } from "./style";

export interface IProps {
  user: IUser;
  handleSelect: (value: string) => void;
}

export const User = ({ user, handleSelect }: IProps) => {
  const onClick = () => {
    handleSelect(user.id);
  };

  return (
    <ContainerSC key={user.id}>
      <PictureSC>{user.name[0].charAt(0).toUpperCase()}</PictureSC>
      <StatusContainerSC>
        <StatusCircleSC variant={user.status} />
      </StatusContainerSC>
      <UserSC onClick={onClick}>{user.name}</UserSC>
    </ContainerSC>
  );
};
