import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { resetAllMessages, setNewMessage } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUpdateFromDB = () => {
  const dispatch = useAppDispatch();

  const { messages, chatId } = useAppSelector(getChatInformation);

  const [sent, setSent] = useState<IMessage[]>();
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    if (chatId) {
      onSnapshot(
        collection(db, Collections.chats, chatId, Collections.messages),
        (querySnapshot) => {
          let messages: any[] = [];

          querySnapshot.forEach((doc) => {
            messages.push(doc.data());
          });

          setSent(messages);
        }
      );
    }
  }, [chatId, dispatch]);

  useEffect(() => {
    dispatch(resetAllMessages());

    sent?.map((message) => {
      return dispatch(setNewMessage(message));
    });
  }, [sent, dispatch]);

  let sortedByTime = [...messages].sort(
    (a, b) => +new Date(a.createdAt) - +new Date(b.createdAt)
  );
  let lastMessage = sortedByTime.slice(-1)[0];

  const setLastMessageToDB = async () => {
    await updateDoc(doc(db, Collections.chats, chatId), {
      lastMessage: lastMessage.text,
    });
  };

  const getLastMessage = () => {
    onSnapshot(doc(db, Collections.chats, chatId), (doc) => {
      let temp = doc.data()!.lastMessage;
      setMessage(temp);
    });
  };
  useEffect(() => {
    setLastMessageToDB();
    getLastMessage();
  }, [lastMessage]);

  return { sortedByTime, message };
};
