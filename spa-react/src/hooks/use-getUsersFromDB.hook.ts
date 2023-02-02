import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IUser } from "src/components/Sidebar/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { setChatId } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUsersFromDB = () => {
  const [users, setUsers] = useState<IUser[]>();

  const { id } = useAppSelector(getUserInfo);

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

  const getChatId = (receiverId: string) => {
    const chatsRef = collection(db, Collections.chats);
    getDocs(chatsRef)
      .then((response) => {
        response.docs.map((doc) => {
          const { participants } = doc.data();

          participants.some((el: string) => el === id) &&
            participants.some((el: string) => el === receiverId) &&
            dispatch(setChatId(doc.id));
        });
      })
      .catch((error) => console.log(error.message));
  };

  const handleSelect = async (userId: string) => {
    const receiver = users?.find((item) => item.id === userId);

    getChatId(receiver!.id);
  };

  let senderIndex = users?.map((item) => item.id).indexOf(id!);
  users?.splice(senderIndex!, 1);

  return { handleSelect, users };
};
