import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Collections } from "src/enums";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { db } from "src/utils/firebase";

export const useGetLastMessage = () => {
  const { chatId } = useAppSelector(getChatInformation);
  const [message, setMessage] = useState<string>();

  const setLastMessageToDB = async (lastMessage: string) => {
    await updateDoc(doc(db, Collections.chats, chatId), {
      lastMessage: lastMessage,
    });
  };

  useEffect(() => {
    if (chatId) {
      onSnapshot(doc(db, Collections.chats, chatId), (doc) => {
        setMessage(doc.data()!.lastMessage);
      });
    }
  }, [message, chatId]);

  return { setLastMessageToDB, message };
};
