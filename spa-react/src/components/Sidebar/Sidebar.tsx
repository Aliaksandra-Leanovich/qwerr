import { useGetUsersFromDB } from "src/hooks/use-getUsersFromDB.hook";
import { useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { Loader } from "../Loader/Loader";
import { User } from "../User/User";
import { ChatsSectionSC } from "./style";
import { IProps, IUser } from "./types";

export const Sidebar = ({ isOpen, setOpen }: IProps) => {
  const { chats, handleSelect } = useGetUsersFromDB();
  const { id } = useAppSelector(getUserInfo);
  return (
    <ChatsSectionSC isOpen={isOpen}>
      {chats ? (
        chats.map((chat, index) => (
          <div key={index}>
            {chat.participants.splice(
              chat.participants.map((item: IUser) => item.uid).indexOf(id!),
              1
            ) && (
              <User
                message={chat?.lastMessage}
                user={chat?.participants[0]}
                handleSelect={handleSelect}
                setOpen={setOpen}
              />
            )}
          </div>
        ))
      ) : (
        <Loader />
      )}
    </ChatsSectionSC>
  );
};
