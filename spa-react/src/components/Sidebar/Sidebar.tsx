import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserEmail, getUserId } from "src/store/selectors";
import {
  setChatId,
  setReceiverEmail,
  setSenderId,
} from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";
import { StatusCircleSC } from "../SelectStatus/style";
import {
  ChatsSectionSC,
  ContainerSC,
  PictureSC,
  StatusContainerSC,
  UserSC,
} from "./style";
import { IUser } from "./types";

export const Sidebar = () => {
  const [users, setUsers] = useState<IUser[]>();

  const userId = useAppSelector(getUserId);
  const userEmail = useAppSelector(getUserEmail);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(collection(db, "users"), (querySnapshot) => {
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
  }, []);

  const handleSelect = async (id: string) => {
    const combinedId = userId + id;

    dispatch(setChatId(combinedId));
    dispatch(setSenderId(id));

    const receiver = users?.find((user) => user.id === id);
    dispatch(setReceiverEmail(receiver!.email));
  };

  let senderIndex = users?.map((item) => item.email).indexOf(userEmail!);
  users?.splice(senderIndex!, 1);

  return (
    <ChatsSectionSC>
      {users?.map((user) => (
        <ContainerSC key={user.id}>
          <PictureSC>{user.name[0].charAt(0).toUpperCase()}</PictureSC>
          <StatusContainerSC>
            <StatusCircleSC variant={user.status} />
          </StatusContainerSC>
          <UserSC onClick={() => handleSelect(user.id)}>{user.name}</UserSC>
        </ContainerSC>
      ))}
    </ChatsSectionSC>
  );
};
