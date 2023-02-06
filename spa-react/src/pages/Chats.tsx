import { useState } from "react";
import { Chat } from "src/components/Chat/Chat";
import {
  ContainerChatSC,
  ContainerSC,
  WrapperSC,
} from "src/components/Chat/style";
import { HeaderChat } from "src/components/HeaderChat/HeaderChat";
import { Sidebar } from "src/components/Sidebar/Sidebar";
import { Colors } from "src/ui";

export const Chats = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <WrapperSC>
      <ContainerSC>
        <HeaderChat
          isOpen={isOpen}
          setOpen={setOpen}
          color={Colors.SECONDARY}
        />
        <ContainerChatSC>
          <Sidebar isOpen={isOpen} setOpen={setOpen} />
          <Chat isOpen={isOpen} />
        </ContainerChatSC>
      </ContainerSC>
    </WrapperSC>
  );
};
