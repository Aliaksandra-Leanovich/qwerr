import { useMemo } from "react";

export const useBroadcastChannel = () => {
  const channel = useMemo(() => new BroadcastChannel("test"), []);

  return { channel };
};
