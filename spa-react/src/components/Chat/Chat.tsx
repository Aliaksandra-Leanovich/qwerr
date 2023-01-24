import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import {
  getChatId,
  getMessages,
  getReceiverEmail,
  getUserEmail,
} from "src/store/selectors";
import {
  resetAllMessages,
  setNewMessage,
  setValue,
} from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";
import { ReactComponent as MessageImg } from "../../assets/message.svg";
import { InputChat } from "../InputChat/InputChat";
import { Message } from "../Message/Message";
import { MessageWithoutAvatar } from "../Message/MessageWithoutAvatar";
import { IMessage } from "../Message/types";
import { ChatsSectionSC } from "../Sidebar/style";
import {
  ChatSectionSC,
  ContainerMessagesSC,
  ImageContainerSC,
  TextSC,
} from "./style";

export const Chat = () => {
  const { reset } = useForm();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const chatId = useAppSelector(getChatId);
  const messages = useAppSelector(getMessages);
  const userEmail = useAppSelector(getUserEmail);
  const recieverEmail = useAppSelector(getReceiverEmail);

  const [sent, setSent] = useState<IMessage[]>();
  const [receive, setReceive] = useState<IMessage[]>();

  const [edit, setEdit] = useState<boolean>(false);
  const [messageId, setMessageId] = useState<string>("");

  useEffect(() => {
    if (userEmail) {
      onSnapshot(collection(db, "messages"), (querySnapshot) => {
        let messages: any[] = [];

        let filteredSent: IMessage[] = [];
        let filteredReceive: IMessage[] = [];

        querySnapshot.forEach((doc) => {
          messages.push(doc.data());
        });

        messages?.map((message) => {
          return message.receivers.map((receiver: string) => {
            return (
              (receiver === recieverEmail && filteredSent.push(message)) ||
              (receiver === userEmail && filteredReceive.push(message))
            );
          });
        });

        setSent(filteredSent);
        setReceive(filteredReceive);
      });
    }
  }, [recieverEmail, userEmail, dispatch]);

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
    (dateA, dateB) => dateA.date.seconds - dateB.date.seconds
  );

  const shouldShowAvatar = (previous: IMessage, message: IMessage) => {
    const isFirst = !previous;
    if (isFirst) return true;

    const diffrentUser = message.senderName !== previous.senderName;
    if (diffrentUser) return true;

    const hasBeenaWhile = message.date.seconds - previous.date.seconds > 60;
    return hasBeenaWhile;
  };

  const handleDelete = async (message: IMessage) => {
    try {
      await deleteDoc(doc(db, "messages", message.id));
    } catch (err) {
      console.log("error", err);
    }
  };

  const handleEdit = async (message: IMessage) => {
    dispatch(setValue(message.message));

    reset((formValues) => ({
      ...formValues,
      message: message.message,
    }));

    setEdit(true);
    setMessageId(message.id);
  };

  return (
    <ChatSectionSC>
      {chatId ? (
        <>
          <ContainerMessagesSC>
            {sortedByTime?.map((message, index) => {
              const previous = sortedByTime[index - 1];
              const showAvatar = shouldShowAvatar(previous, message);
              return showAvatar ? (
                <Message
                  key={message.id}
                  message={message}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ) : (
                <MessageWithoutAvatar
                  key={message.id}
                  message={message}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              );
            })}
          </ContainerMessagesSC>
          <InputChat
            edit={edit}
            setEdit={setEdit}
            messageId={messageId}
            setMessageId={setMessageId}
          />
        </>
      ) : (
        <ChatsSectionSC>
          <ImageContainerSC>
            <MessageImg />
          </ImageContainerSC>
          <TextSC>{t("chat.empty")}</TextSC>
        </ChatsSectionSC>
      )}
    </ChatSectionSC>
  );
};
