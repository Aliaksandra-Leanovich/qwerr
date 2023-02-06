import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "src/components/Message/types";

interface IInitial {
  chatId: string;
  user: {};
  messages: IMessage[];
  emailSender: string;
  value: "";
}
const initialState: IInitial = {
  chatId: "",
  user: {},
  messages: [],
  emailSender: "",
  value: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },

    setSenderEmail: (state, action) => {
      state.emailSender = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setNewMessage: (state, { payload }: PayloadAction<IMessage>) => {
      state.messages = [
        ...state.messages.filter((item) => item.id !== payload.id),
        { ...payload },
      ];
    },
    resetAllMessages: (state) => {
      state.messages = [];
    },
  },
});
export const {
  setChatId,
  setUser,
  setNewMessage,
  setSenderEmail,
  setValue,
  resetAllMessages,
} = chatSlice.actions;
export default chatSlice.reducer;
