import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/components/Table/types";
import { IInitialState } from "../types";

const initialState: IInitialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setNewUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users = [...state.users, payload];
    },
    setInitialUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
export const { setInitialUsers, setNewUser } = usersSlice.actions;
export default usersSlice.reducer;
