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

  const { email } = useAppSelector(getUserInfo);

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

  const getChatId = (receiverEmail: string) => {
    const chatsRef = collection(db, Collections.chats);
    getDocs(chatsRef)
      .then((response) => {
        response.docs.map((doc) => {
          const { participants } = doc.data();
          participants.some((el: string) => el === email) &&
            participants.some((el: string) => el === receiverEmail) &&
            dispatch(setChatId(doc.data().id));
        });
      })
      .catch((error) => console.log(error.message));
  };

  const handleSelect = async (userId: string) => {
    const receiver = users?.find((item) => item.id === userId);

    getChatId(receiver!.email);
  };

  let senderIndex = users?.map((item) => item.email).indexOf(email!);
  users?.splice(senderIndex!, 1);

  return { handleSelect, users };
};
