import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IUser } from "src/components/Sidebar/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";

import { setChatId, setReceiveChatId } from "src/store/slices/chatSlice";

import { db } from "src/utils/firebase";

export const useGetUsersFromDB = () => {
  const [users, setUsers] = useState<IUser[]>();

  const { id, email } = useAppSelector(getUserInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(collection(db, Collections.users), (querySnapshot) => {
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
  }, [users]);

  const handleSelect = async (userId: string) => {
    const receiver = users?.find((item) => item.id === userId);

    const sendId = id + userId;
    const receiveId = userId + id;

    dispatch(setChatId(sendId));
    dispatch(setReceiveChatId(receiveId));

    await setDoc(doc(db, Collections.chats, sendId), {
      participants: [receiver?.email, email],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  };

  let senderIndex = users?.map((item) => item.email).indexOf(email!);
  users?.splice(senderIndex!, 1);

  return { handleSelect, users };
};
