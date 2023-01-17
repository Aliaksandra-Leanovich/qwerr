import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/hooks/use-getUsers.hook";
export interface IProps {
  users: IUser[];
}
interface IInitialState {
  users: {
    users: IUser[];
  };
}
const initialState: IInitialState = {
  users: {
    users: [],
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setNewUser: (state, { payload }: PayloadAction<IUser>) => {
      state.users = {
        users: [...state.users.users, payload],
      };
    },
    setInitialUsers: (state, action) => {
      state.users.users = action.payload;
    },
  },
});
export const { setInitialUsers, setNewUser } = usersSlice.actions;
export default usersSlice.reducer;
