import { useState } from "react";
import { IMessage } from "src/components/Message/types";
import { useAppDispatch } from "src/store/hooks";
import { setValue } from "src/store/slices/chatSlice";

export const useHadleEdit = () => {
  const dispatch = useAppDispatch();

  const [edit, setEdit] = useState<boolean>(false);
  const [messageId, setMessageId] = useState<string>("");

  const handleEdit = async (message: IMessage) => {
    if (message) {
      dispatch(setValue(message.message));

      setEdit(true);
      setMessageId(message.id);
    }
  };

  return { handleEdit, messageId, edit, setMessageId, setEdit };
};
