import { doc, setDoc } from "firebase/firestore";
import uuid from "react-uuid";
import { Collections } from "src/enums";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation, getUserInfo } from "src/store/selectors";
import { db } from "src/utils/firebase";

export const useSetMessageToDB = () => {
  const { chatId, receiveChatId } = useAppSelector(getChatInformation);
  const { email, name, id } = useAppSelector(getUserInfo);

  const setMessageToDB = async (message: string) => {
    let setId = uuid();

    if (message) {
      try {
        setDoc(
          doc(db, Collections.chats, chatId, Collections.messages, setId),
          {
            message: message,
            id: setId,
            sendAt: new Date().toISOString(),
            sender: {
              email: email,
              name: name,
              id: id,
            },
          }
        );
        setDoc(
          doc(
            db,
            Collections.chats,
            receiveChatId,
            Collections.messages,
            setId
          ),
          {
            message: message,
            id: setId,
            sendAt: new Date().toISOString(),
            sender: {
              email: email,
              name: name,
              id: id,
            },
          }
        );
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  return { setMessageToDB };
};
