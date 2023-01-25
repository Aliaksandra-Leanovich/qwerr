import { useGetUsersFromDB } from "src/hooks/use-getUsersFromDB.hook";
import { User } from "../User/User";
import { ChatsSectionSC } from "./style";

export const Sidebar = () => {
  const { users, handleSelect } = useGetUsersFromDB();

  return (
    <ChatsSectionSC>
      {users?.map((user) => (
        <User key={user.id} user={user} handleSelect={handleSelect} />
      ))}
    </ChatsSectionSC>
  );
};
