import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "src/utils/firebase";

export interface IUser {
  name: string;
  surname: string;
  id: string;
  date: string;
  sum: number;
}

export const useGetUsersFromDB = () => {
  const [usersFromDB, setUsersFromDB] = useState<any>();

  const getUsers = () => {
    const usersCollectionRef = collection(db, "usersDBNEW");
    getDocs(usersCollectionRef)
      .then((response) => {
        const users = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));

        setUsersFromDB(users.map((item) => item.data));
      })
      .catch((error) => console.log(error.message));
  };

  return { usersFromDB, getUsers };
};
