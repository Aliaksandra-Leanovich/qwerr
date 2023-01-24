import { RootState } from "../store";

export const getUserInfo = (state: RootState) => state.user;
export const getUserId = (state: RootState) => state.user.id;
export const getUserEmail = (state: RootState) => state.user.email;
export const getUserName = (state: RootState) => state.user.name;
export const getAllUsers = (state: RootState) => state.users.users;
