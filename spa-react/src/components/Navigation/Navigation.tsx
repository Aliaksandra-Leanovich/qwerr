import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { LinkVariants } from "../../enums";
import { routes } from "../../routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserInfo } from "../../store/selectors";
import { unsetUser } from "../../store/slices/userSlice";
import { Link } from "../Link";
import { LoginForm } from "../LoginForm";
import { Modal } from "../Modal/Modal";
import { ButtonSC, ContainerSC, LinkCustomSC, LinkSC } from "./style";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuthorized } = useAppSelector(getUserInfo);

  const cookies = new Cookies();

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  const handleLogout = () => {
    dispatch(unsetUser());
    cookies.remove("token", { path: "/" });
    navigate(routes.HOME);
  };

  return (
    <ContainerSC>
      <LinkSC href={routes.PRODUCT}>Product</LinkSC>
      <LinkSC href={routes.SERVICES}>Services</LinkSC>
      <LinkCustomSC to={routes.ABOUT}>About</LinkCustomSC>
      <Modal show={show} handleClose={showModal}>
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
