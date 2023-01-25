import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "src/components/Message/types";

interface IInitial {
  chatId: string;

  user: {};
  messages: IMessage[];
  idSender: string;
  value: "";
  receiverEmail: string;
}
const initialState: IInitial = {
  chatId: "",
  user: {},
  messages: [],
  idSender: "",
  value: "",
  receiverEmail: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },

    setReceiverEmail: (state, action) => {
      state.receiverEmail = action.payload;
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
    deleteMessage: (state, { payload }: PayloadAction<IMessage>) => {
      state.messages = state.messages.filter((item) => item.id !== payload.id);
    },
  },
});
export const {
  setChatId,
  setUser,
  setNewMessage,
  setSenderId,
  deleteMessage,
  setReceiverEmail,
  setValue,
  resetAllMessages,
} = chatSlice.actions;
export default chatSlice.reducer;