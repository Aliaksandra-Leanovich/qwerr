import { useAppSelector } from "src/store/hooks";
import { getUserEmail } from "src/store/selectors";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import {
  ButtonContainerSC,
  ButtonSC,
  MessageWithoutAvatarSC,
  TextSC,
} from "./style";
import { IProps } from "./types";

export const MessageWithoutAvatar = ({
  message,
  handleDelete,
  handleEdit,
}: IProps) => {
  const userEmail = useAppSelector(getUserEmail);
  return (
    <MessageWithoutAvatarSC>
      <TextSC>{message.message}</TextSC>
      <ButtonContainerSC>
        {message.senderEmail === userEmail && (
          <ButtonSC onClick={() => handleDelete(message)}>
            <Delete />
          </ButtonSC>
        )}
        {message.senderEmail === userEmail && (
          <>
            <ButtonSC onClick={() => handleEdit(message)}>
              <Edit />
            </ButtonSC>
          </>
        )}
      </ButtonContainerSC>
    </MessageWithoutAvatarSC>
  );
};
