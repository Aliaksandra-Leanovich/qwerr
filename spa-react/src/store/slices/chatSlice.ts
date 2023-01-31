import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "src/components/Message/types";

interface IInitial {
  chatId: string;
  receiveChatId: string;
  user: {};
  messages: IMessage[];
  idSender: string;
  value: "";
}
const initialState: IInitial = {
  chatId: "",
  receiveChatId: "",
  user: {},
  messages: [],
  idSender: "",
  value: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },
    setReceiveChatId: (state, action) => {
      state.receiveChatId = action.payload;
    },

    setSenderId: (state, action) => {
      state.idSender = action.payload;
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
  setReceiveChatId,
  setSenderId,
  setValue,
  resetAllMessages,
} = chatSlice.actions;
export default chatSlice.reducer;
