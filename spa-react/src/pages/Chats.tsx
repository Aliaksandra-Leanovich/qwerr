import { Chat } from "src/components/Chat/Chat";
import {
  ContainerChatSC,
  ContainerSC,
  WrapperSC,
} from "src/components/Chat/style";
import { HeaderChat } from "src/components/HeaderChat/HeaderChat";
import { Sidebar } from "src/components/Sidebar/Sidebar";

export const Chats = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <HeaderChat />
        <ContainerChatSC>
          <Sidebar />
          <Chat />
        </ContainerChatSC>
      </ContainerSC>
    </WrapperSC>
  );
};
