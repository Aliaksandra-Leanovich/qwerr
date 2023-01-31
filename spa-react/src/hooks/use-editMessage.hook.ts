import { doc, updateDoc } from "firebase/firestore";
import { Collections } from "src/enums";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation } from "src/store/selectors";
import { db } from "src/utils/firebase";

export const useEditMessage = (
  setEdit: (value: boolean) => void,
  setMessageId: (value: string) => void,
  messageId: string
) => {
  const { chatId } = useAppSelector(getChatInformation);

  const editMessage = async (message: string) => {
    if (message) {
      try {
        await updateDoc(
          doc(db, Collections.chats, chatId, Collections.messages, messageId),
          {
            message: message,
          }
        );

        setEdit(false);
        setMessageId("");
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  return { editMessage };
};
