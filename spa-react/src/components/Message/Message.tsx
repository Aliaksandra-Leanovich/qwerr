import { useConvertDate, useScrollMessage } from "src/hooks";
import { useHandleDelete } from "src/hooks/use-hadleDelete.hook";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import {
  ButtonContainerSC,
  ButtonSC,
  Date,
  InfoPersonSC,
  InfoSC,
  MessageSC,
  NameSC,
  PictureSC,
  TextSC,
} from "./style";
import { IProps } from "./types";

export const Message = ({ message, handleEdit }: IProps) => {
  const { ref } = useScrollMessage(message);

  const email = localStorage.getItem("userEmail");

  const { newDate } = useConvertDate(message.createdAt);
  const { handleDelete } = useHandleDelete(message);

  const onClick = () => {
    handleEdit(message);
  };

  return (
    <MessageSC ref={ref}>
      <PictureSC>{message.sender.name[0]}</PictureSC>
      <InfoSC>
        <InfoPersonSC>
          <NameSC>{message.sender.name}</NameSC>
          <Date>{newDate}</Date>
        </InfoPersonSC>
        <TextSC>{message.text}</TextSC>
      </InfoSC>
      <ButtonContainerSC>
        {message.sender.email === email && (
          <ButtonSC onClick={handleDelete}>
            <Delete />
          </ButtonSC>
        )}
        {message.sender.email === email && (
          <ButtonSC onClick={onClick}>
            <Edit />
          </ButtonSC>
        )}
      </ButtonContainerSC>
    </MessageSC>
  );
};
