import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("userToken"),
  token: localStorage.getItem("userToken"),
  email: "",
  id: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.isAuthorized = localStorage.getItem("userToken");
      state.token = action.payload;
    },
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUserName: (state, action) => {
      state.name = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userToken");
      state.token = "";
      state.email = "";
      state.id = "";
      state.name = "";
    },
  },
});
export const { setUserToken, unsetUser, setUserEmail, setUserId, setUserName } =
  userSlice.actions;
export default userSlice.reducer;
