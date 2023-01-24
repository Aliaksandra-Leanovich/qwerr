import { Chat } from "src/components/Chat/Chat";
import { ContainerSC, WrapperSC } from "src/components/Chat/style";
import { Sidebar } from "src/components/Sidebar/Sidebar";

export const Chats = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <Sidebar />
        <Chat />
      </ContainerSC>
    </WrapperSC>
  );
};
