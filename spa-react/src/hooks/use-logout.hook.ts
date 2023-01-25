import { doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { routes } from "src/routes";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getUserId } from "src/store/selectors";
import { unsetUser } from "src/store/slices/userSlice";
import { db } from "src/utils/firebase";
import Cookies from "universal-cookie";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userId = useAppSelector(getUserId);

  const cookies = new Cookies();
  const handleLogout = async () => {
    dispatch(unsetUser());
    try {
      await updateDoc(doc(db, "users", userId), {
        status: "away",
      });
    } catch (event) {
      console.error("Error adding document: ", event);
    }
    cookies.remove("token", { path: "/" });
    navigate(routes.HOME);
  };

  return { handleLogout };
};
