import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { useAppDispatch } from "src/store/hooks";
import { db } from "src/utils/firebase";
import Cookies from "universal-cookie";
import { IUserForm } from "../components/LoginForm/types";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import {
  setUserEmail,
  setUserId,
  setUserName,
  setUserToken,
} from "../store/slices/userSlice";
import { app } from "../utils";

export const useLogin = (
  setShow: (value: boolean) => void,
  clearErrors: () => void
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cookies = new Cookies();
  const localStorageKey = "userToken";

  const [error, setError] = useState("");

  const setUserTokenToStorage = (token: string) => {
    localStorage.setItem(localStorageKey, token);
    cookies.set("token", token, { path: "/" });
    dispatch(setUserToken(token));
  };

  const setUserToStorage = (id: string, email: string, name: string) => {
    dispatch(setUserId(id));
    dispatch(setUserEmail(email));
    dispatch(setUserName(name));
  };

  const setUsersToDB = async (data: IUserForm) => {
    const user = {
      email: data.email,
      id: uuid(),
      name: data.name,
      status: "active",
    };
    try {
      const docRef = await setDoc(doc(db, "users", user.id), user);
      setUserToStorage(user.id, user.email, user.name);
      await setDoc(doc(db, "userChats", user.id), {});
      console.log("Document written with ID: ", docRef);
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        return await signInWithEmailAndPassword(auth, data.email, data.password)
          .then(async (userCredential) => {
            const token = await userCredential.user.getIdToken();
            setUsersToDB(data);
            setShow(false);
            clearErrors();
            setUserTokenToStorage(token);
            navigate(routes.HOME);
          })
          .catch((error) => {
            setError(getAuthError(error.code));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { error, onSubmit };
};
