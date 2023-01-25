import { doc, setDoc } from "firebase/firestore";
import uuid from "react-uuid";
import { useAppSelector } from "src/store/hooks";
import { getChatInformation, getUserInfo } from "src/store/selectors";
import { db } from "src/utils/firebase";

export const useSetMessageToDB = () => {
  const { receiverEmail } = useAppSelector(getChatInformation);
  const { email, name, id } = useAppSelector(getUserInfo);

  const setMessageToDB = async (message: string) => {
    let setId = uuid();
    if (message) {
      try {
        await setDoc(doc(db, "messages", setId), {
          id: setId,
          message: message,
          date: new Date().toISOString(),
          sender: {
            email: email,
            name: name,
            id: id,
          },
          receivers: [receiverEmail],
        });
      } catch (err) {
        console.log("error", err);
      }
    }
  };

  return { setMessageToDB };
};
