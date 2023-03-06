import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { UseFormGetValues } from "react-hook-form";
import { db } from "../utils/firebase";
import { useBroadcastChannel } from "./use-broadcastChannel.hook";

export const useAddUser = (
  reset: () => void,
  getValues: UseFormGetValues<any>
) => {
  const [message, setMessage] = useState<string>("");
  const { channel } = useBroadcastChannel();
  channel.postMessage(message);

  const addUser = async (email: string) => {
    setMessage(email);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = () => {
    const { email } = getValues();
    addUser(email);
    reset();
  };

  return { onSubmit };
};
