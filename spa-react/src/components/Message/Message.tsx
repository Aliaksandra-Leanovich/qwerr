import { useConvertDate } from "src/hooks";
import { useHandleDelete } from "src/hooks/use-hadleDelete.hook";
import { useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors/userSelector";
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

export const Message = ({ message, handleEdit }: IProps) => {
  const { email } = useAppSelector(getUserInfo);
  const { newDate } = useConvertDate(message.date);
  const { handleDelete } = useHandleDelete(message);

  const onClick = () => {
    handleEdit(message);
  };

  return (
    <MessageSC>
      <PictureSC>{message.sender.name[0]}</PictureSC>
      <InfoSC>
        <InfoPersonSC>
          <NameSC>{message.sender.name}</NameSC>
          <Date>{newDate}</Date>
        </InfoPersonSC>
        <TextSC>{message.message}</TextSC>
      </InfoSC>

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
    </MessageSC>
  );
};
