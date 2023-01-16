import { doc, setDoc } from "firebase/firestore";
import { IUser } from "src/components/TableWithUsers/types";
import { db } from "src/utils/firebase";

interface IUsers {
  users: IUser[];
}

export const useSetUsersToDb = (users: IUsers) => {
  const setUsersToDB = async () => {
    try {
      const docRef = await setDoc(doc(db, "usersDB", "users"), users);

      console.log("Document written with ID: ", docRef);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  return { setUsersToDB };
};
