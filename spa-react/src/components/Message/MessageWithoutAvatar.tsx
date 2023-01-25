import { useHandleDelete } from "src/hooks/use-hadleDelete.hook";
import { useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import {
  ButtonContainerSC,
  ButtonSC,
  MessageWithoutAvatarSC,
  TextSC,
} from "./style";
import { IProps } from "./types";

export const MessageWithoutAvatar = ({ message, handleEdit }: IProps) => {
  const { email } = useAppSelector(getUserInfo);
  const { handleDelete } = useHandleDelete(message);

  const onClick = () => {
    handleEdit(message);
  };

  return (
    <MessageWithoutAvatarSC>
      <TextSC>{message.message}</TextSC>
      <ButtonContainerSC>
        {message.sender.email === email && (
          <ButtonSC onClick={handleDelete}>
            <Delete />
          </ButtonSC>
        )}
        {message.sender.email === email && (
          <>
            <ButtonSC onClick={onClick}>
              <Edit />
            </ButtonSC>
          </>
        )}
      </ButtonContainerSC>
    </MessageWithoutAvatarSC>
  );
};
