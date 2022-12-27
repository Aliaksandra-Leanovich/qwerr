import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LinkVariants } from "../../enums";
import { routes } from "../../routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserInfo } from "../../store/selectors";
import { unsetUser } from "../../store/slices/userSlice";
import { Link } from "../Link";
import { LoginForm } from "../LoginForm";
import { Modal } from "../Modal/Modal";
import { ButtonSC, ContainerSC, LinkSC } from "./style";

const config = [
  {
    href: routes.PRODUCT,
    title: "Product",
  },
  {
    href: routes.SERVICES,
    title: "Services",
  },

  {
    href: routes.HOME,
    title: "About",
  },
];

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuthorized } = useAppSelector(getUserInfo);

  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const handleLogout = () => {
    dispatch(unsetUser());
    navigate(routes.HOME);
  };

  return (
    <ContainerSC>
      {config.map((item, index) => (
        <LinkSC to={item.href} key={index}>
          {item.title}
        </LinkSC>
      ))}
      <Modal show={show} handleClose={closeModal}>
        <LoginForm setShow={setShow} />
      </Modal>
      <>
        {isAuthorized ? (
          <>
            <Link to={routes.USERS} variant={LinkVariants.primaryWhiteSmall}>
              Users
            </Link>
            <ButtonSC type="button" onClick={handleLogout}>
              Logout
            </ButtonSC>
          </>
        ) : (
          <ButtonSC onClick={showModal}>Log in</ButtonSC>
        )}
      </>
    </ContainerSC>
  );
};
