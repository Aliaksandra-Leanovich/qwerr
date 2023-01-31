import { useGetUsersFromDB } from "src/hooks/use-getUsersFromDB.hook";
import { User } from "../User/User";
import { ChatsSectionSC } from "./style";
import { IProps } from "./types";

export const Sidebar = ({ isOpen, setOpen }: IProps) => {
  const { users, handleSelect } = useGetUsersFromDB();

  return (
    <ChatsSectionSC isOpen={isOpen}>
      {users?.map((user) => (
        <User
          key={user.id}
          user={user}
          handleSelect={handleSelect}
          setOpen={setOpen}
        />
      ))}
    </ChatsSectionSC>
  );
};
