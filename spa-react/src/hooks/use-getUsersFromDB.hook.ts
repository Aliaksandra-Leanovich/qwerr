import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IChat, IUser } from "src/components/Sidebar/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { setChatId } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUsersFromDB = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [chats, setChats] = useState<IChat[]>();
  const [idChat, setIdChat] = useState<string>();

  const { id } = useAppSelector(getUserInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(collection(db, Collections.chats), (querySnapshot) => {
      const chat: any[] = [];
      querySnapshot.forEach((doc) => {
        chat.push(doc.data());
      });

      setChats(chat);
    });
  }, [chats]);

  useEffect(() => {
    onSnapshot(collection(db, Collections.chats), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const { participants } = doc.data();
        setUsers(participants);
      });
    });
  }, [users]);

  useEffect(() => {
    if (idChat) {
      dispatch(setChatId(idChat));
    }
  }, [idChat, dispatch]);

  const getChatId = (receiverId: string) => {
    const chatsRef = collection(db, Collections.chats);
    if (receiverId) {
      getDocs(chatsRef)
        .then((response) => {
          response.docs.map((doc) => {
            const { participants } = doc.data();

            participants.some((el: IUser) => el.uid === id) &&
              participants.some((el: IUser) => el.uid === receiverId) &&
              dispatch(setChatId(doc.id));
            localStorage.setItem("chatId", doc.id);
            setIdChat(doc.id); ///!!!
          });
        })
        .catch((error) => console.log(error.message));
    }
  };

  const handleSelect = (userId: string) => {
    if (users) {
      const receiver = users?.find((item) => (item.uid = userId));
      getChatId(receiver!.uid);
    }
  };

  let senderIndex = users?.map((item: any) => item.uid).indexOf(id!);
  users?.splice(senderIndex!, 1);

  return { handleSelect, users, chats, idChat };
};
