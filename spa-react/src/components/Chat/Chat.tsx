import { useGetUpdateFromDB } from "src/hooks/use-getUpdateFromDB.hook";
import { useHadleEdit } from "src/hooks/use-handleEdit.hook";
import { InputChat } from "../InputChat/InputChat";
import { Message, MessageWithoutAvatar } from "../Message";
import { IMessage } from "../Message/types";
import { ChatSectionSC, ContainerMessagesSC } from "./style";

export const Chat = () => {
  const { messageId, edit, setMessageId, setEdit, handleEdit } = useHadleEdit();
  const { sortedByTime } = useGetUpdateFromDB();

  const shouldShowAvatar = (previous: IMessage, message: IMessage) => {
    const isFirst = !previous;
    if (isFirst) return true;

    const diffrentUser = message.sender.id !== previous.sender.id;
    if (diffrentUser) return true;

    const hasBeenaWhile =
      (+new Date(message.sendAt) - +new Date(previous.sendAt)) / 1000 > 60;
    return hasBeenaWhile;
  };

  return (
    <ChatSectionSC>
      <ContainerMessagesSC>
        {sortedByTime?.map((message, index) => {
          const previous = sortedByTime[index - 1];
          const showAvatar = shouldShowAvatar(previous, message);
          return showAvatar ? (
            <Message
              key={message.id}
              message={message}
              handleEdit={handleEdit}
            />
          ) : (
            <MessageWithoutAvatar
              key={message.id}
              message={message}
              handleEdit={handleEdit}
            />
          );
        })}
      </ContainerMessagesSC>
      <InputChat
        messageId={messageId}
        edit={edit}
        setMessageId={setMessageId}
        setEdit={setEdit}
      />
    </ChatSectionSC>
  );
};
