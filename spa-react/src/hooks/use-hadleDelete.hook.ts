import { deleteDoc, doc } from "firebase/firestore";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { db } from "src/utils/firebase";

export const useHandleDelete = (message: IMessage) => {
  const { chatId } = useAppSelector(getChatInformation);

  const handleDelete = async () => {
    if (chatId) {
      try {
        await deleteDoc(
          doc(db, Collections.chats, chatId, Collections.messages, message.id)
        );
      } catch (err) {
        console.log("error", err);
      }
    }
  };
  return { handleDelete };
};
