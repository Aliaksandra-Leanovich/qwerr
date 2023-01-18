import { RootState } from "../store";

export const getUserInfo = (state: RootState) => state.user;
export const getAllUsers = (state: RootState) => state.users.users;
