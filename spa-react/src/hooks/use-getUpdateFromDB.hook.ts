import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getChatInformation, getUserInfo } from "src/store/selectors";
import { resetAllMessages, setNewMessage } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUpdateFromDB = () => {
  const dispatch = useAppDispatch();

  const { messages, receiverEmail } = useAppSelector(getChatInformation);
  const { email } = useAppSelector(getUserInfo);

  const [sent, setSent] = useState<IMessage[]>();
  const [receive, setReceive] = useState<IMessage[]>();

  useEffect(() => {
    if (email) {
      onSnapshot(collection(db, Collections.messages), (querySnapshot) => {
        let messages: any[] = [];

        let filteredSent: IMessage[] = [];
        let filteredReceive: IMessage[] = [];

        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });

        messages?.map((message) => {
          return message.receivers.map((receiver: string) => {
            return (
              (receiver === receiverEmail && filteredSent.push(message)) ||
              (receiver === email && filteredReceive.push(message))
            );
          });
        });

        setSent(filteredSent);
        setReceive(filteredReceive);
      });
    }
  }, [receiverEmail, email, dispatch]);

  useEffect(() => {
    dispatch(resetAllMessages());

    sent?.map((item) => {
      return dispatch(setNewMessage(item));
    });

    receive?.map((item) => {
      return dispatch(setNewMessage(item));
    });
  }, [dispatch, sent, receive]);

  let sortedByTime = [...messages].sort(
    (a, b) => +new Date(a.date) - +new Date(b.date)
  );

  return { sortedByTime };
};
