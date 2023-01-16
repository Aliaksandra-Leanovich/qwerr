import React, { useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const TableWithUsers = () => {
  const users = {
    users: [
      {
        name: "Alex",
        surname: "ALex",
        id: "1",
        date: new Date().toLocaleString(),
      },
    ],
  };
  const setUsersToDB = async () => {
    try {
      const docRef = await setDoc(doc(db, "usersDB", "users"), users);

      console.log("Document written with ID: ", docRef);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  useEffect(() => {
    setUsersToDB();
  }, []);

  return (
    <div>
      {users.users.map((user, index) => (
        <li key={index}>
          {user.name} {user.date}
        </li>
      ))}
    </div>
  );
};
