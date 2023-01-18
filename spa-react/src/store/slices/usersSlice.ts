import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/hooks/use-getUsers.hook";
export interface IProps {
  users: IUser[];
}
interface IInitialState {
  users: IUser[];
}
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
