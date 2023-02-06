import { useHandleDelete } from "src/hooks/use-hadleDelete.hook";
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
  const email = localStorage.getItem("userEmail");

  const { handleDelete } = useHandleDelete(message);

  const onClick = () => {
    handleEdit(message);
  };

  return (
    <MessageWithoutAvatarSC>
      <TextSC>{message.text}</TextSC>
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
