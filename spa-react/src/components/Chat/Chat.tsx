import { useGetUpdateFromDB } from "src/hooks/use-getUpdateFromDB.hook";
import { useHadleEdit } from "src/hooks/use-handleEdit.hook";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { InputChat } from "../InputChat/InputChat";
import { Message, MessageWithoutAvatar } from "../Message";
import { IMessage } from "../Message/types";
import { IStylesProps } from "../Sidebar/types";
import { ReactComponent as Sent } from "../../assets/sent.svg";
import {
  ChatSectionSC,
  ContainerMessagesSC,
  ImageSC,
  SelectContsinerSC,
  TextSC,
} from "./style";

export const Chat = ({ isOpen }: IStylesProps) => {
  const { messageId, edit, setMessageId, setEdit, handleEdit } = useHadleEdit();
  const { sortedByTime } = useGetUpdateFromDB();

  const { emailSender } = useAppSelector(getChatInformation);

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
    <>
      {emailSender ? (
        <ChatSectionSC isOpen={isOpen}>
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
      ) : (
        <SelectContsinerSC isOpen={isOpen}>
          <TextSC>Please,select a chat </TextSC>
          <ImageSC>
            <Sent />
          </ImageSC>
        </SelectContsinerSC>
      )}
    </>
  );
};
