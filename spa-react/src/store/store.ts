import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./slices/chatSlice";
import userSlice from "./slices/userSlice";
import usersSlice from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    users: usersSlice,
    chat: chatSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
