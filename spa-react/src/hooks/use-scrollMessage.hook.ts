import { useEffect, useRef } from "react";
import { IMessage } from "src/components/Message/types";

export const useScrollMessage = (message: IMessage) => {
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);
  return { ref };
};
