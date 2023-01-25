import { deleteDoc, doc } from "firebase/firestore";
import { IMessage } from "src/components/Message/types";
import { Collections } from "src/enums";
import { db } from "src/utils/firebase";

export const useHandleDelete = (message: IMessage) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, Collections.messages, message.id));
    } catch (err) {
      console.log("error", err);
    }
  };
  return { handleDelete };
};
