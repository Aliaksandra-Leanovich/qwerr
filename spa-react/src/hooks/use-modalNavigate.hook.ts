import { useState } from "react";

export const useModalNavigate = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(!show);
  };

  return { show, showModal };
};
