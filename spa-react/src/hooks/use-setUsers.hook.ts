import { doc, setDoc } from "firebase/firestore";
import { IUser } from "src/components/Table/types";
import { db } from "src/utils/firebase";

export const useSetUsersToDb = () => {
  const setUsersToDB = async (id: string, user: IUser) => {
    try {
      const docRef = await setDoc(doc(db, "usersDBNEW", id), user);
      console.log("Document written with ID: ", docRef);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  return { setUsersToDB };
};
