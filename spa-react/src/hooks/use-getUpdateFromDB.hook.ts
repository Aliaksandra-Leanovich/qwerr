import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { resetAllMessages, setNewMessage } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUpdateFromDB = () => {
  const dispatch = useAppDispatch();

  const { messages, chatId, receiveChatId } =
    useAppSelector(getChatInformation);
  const [receive, setReceive] = useState<IMessage[]>();
  const [sent, setSent] = useState<IMessage[]>();

  useEffect(() => {
    if (chatId && receiveChatId) {
      onSnapshot(
        collection(db, Collections.chats, chatId, Collections.messages),
        (querySnapshot) => {
          let messages: any[] = [];

          querySnapshot.forEach((doc) => {
            messages.push(doc.data());
          });
          setReceive(messages);
        }
      );
      onSnapshot(
        collection(db, Collections.chats, receiveChatId, Collections.messages),
        (querySnapshot) => {
          let messages: any[] = [];

          querySnapshot.forEach((doc) => {
            messages.push(doc.data());
          });
          setSent(messages);
        }
      );
    }
  }, [chatId, dispatch, receiveChatId]);

  useEffect(() => {
    dispatch(resetAllMessages());
    receive?.map((message) => {
      return dispatch(setNewMessage(message));
    });
    sent?.map((message) => {
      return dispatch(setNewMessage(message));
    });
  }, [receive, sent, dispatch]);

  let sortedByTime = [...messages].sort(
    (a, b) => +new Date(a.sendAt) - +new Date(b.sendAt)
  );

  return { sortedByTime };
};
