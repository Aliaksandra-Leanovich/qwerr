import { RootState } from "../store";

export const getValue = (state: RootState) => state.chat.value;
export const getChatId = (state: RootState) => state.chat.chatId;
export const getUser = (state: RootState) => state.chat.user;
export const getMessages = (state: RootState) => state.chat.messages;
export const getSenderId = (state: RootState) => state.chat.idSender;
export const getReceiverEmail = (state: RootState) => state.chat.receiverEmail;
