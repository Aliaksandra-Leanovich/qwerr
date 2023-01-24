import { useConvertDate } from "src/hooks";
import { useAppSelector } from "src/store/hooks";
import { getUserEmail } from "src/store/selectors/userSelector";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import {
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

export const Message = ({ message, handleEdit, handleDelete }: IProps) => {
  const userEmail = useAppSelector(getUserEmail);
  const date = useConvertDate(message.date.seconds);

  return (
    <MessageSC>
      <PictureSC>{message.senderName[0].toUpperCase()}</PictureSC>
      <InfoSC>
        <InfoPersonSC>
          <NameSC>{message.senderName}</NameSC>
          <Date>{date.newDate}</Date>
        </InfoPersonSC>
        <TextSC>{message.message}</TextSC>
      </InfoSC>

      {message.senderEmail === userEmail && (
        <ButtonSC onClick={() => handleDelete(message)}>
          <Delete />
        </ButtonSC>
      )}
      {message.senderEmail === userEmail && (
        <ButtonSC onClick={() => handleEdit(message)}>
          <Edit />
        </ButtonSC>
      )}
    </MessageSC>
  );
};
