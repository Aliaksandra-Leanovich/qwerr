import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { resetAllMessages, setNewMessage } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";
import { useGetLastMessage } from "./use-getLastMessage.hook";

export const useGetUpdateFromDB = () => {
  const dispatch = useAppDispatch();

  const { messages, chatId } = useAppSelector(getChatInformation);
  const { setLastMessageToDB } = useGetLastMessage();

  const [sent, setSent] = useState<IMessage[]>();

  useEffect(() => {
    if (chatId) {
      onSnapshot(
        collection(db, Collections.chats, chatId, Collections.messages),
        (querySnapshot) => {
          let messages: any[] = [];

          querySnapshot.forEach((doc) => {
            messages.push(doc.data());
          });
          if (messages) {
            let lastMessage = messages
              ?.sort((a, b) => +new Date(a.createdAt) - +new Date(b.createdAt))
              .slice(-1)[0];

            setLastMessageToDB(lastMessage.text);
            setSent(messages);
          }
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

  return { sortedByTime };
};
