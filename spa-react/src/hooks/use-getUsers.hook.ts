import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "src/utils/firebase";

export interface IUser {
  name: string;
  surname: string;
  id: string;
  date: string;
}

export const useGetUsersFromDB = () => {
  const [usersFromDB, setUsersFromDB] = useState<IUser[]>();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    const usersCollectionRef = collection(db, "usersDB");
    getDocs(usersCollectionRef)
      .then((response) => {
        const users = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setUsersFromDB(
          users.map((user) => {
            return user.data.users;
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  return { usersFromDB };
};
