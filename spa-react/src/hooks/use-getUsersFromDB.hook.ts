import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IUser } from "src/components/Sidebar/types";
import { Collections } from "src/enums";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserInfo } from "src/store/selectors";
import { setReceiverEmail, setSenderEmail } from "src/store/slices/chatSlice";
import { db } from "src/utils/firebase";

export const useGetUsersFromDB = () => {
  const [users, setUsers] = useState<IUser[]>();

  const { email } = useAppSelector(getUserInfo);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onSnapshot(collection(db, Collections.users), (querySnapshot) => {
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
  }, [users]);

  const handleSelect = async (email: string) => {
    dispatch(setSenderEmail(email));

    const receiver = users?.find((user) => user.email === email);
    dispatch(setReceiverEmail(receiver!.email));
  };

  let senderIndex = users?.map((item) => item.email).indexOf(email!);
  users?.splice(senderIndex!, 1);

  return { handleSelect, users };
};
