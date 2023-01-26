import { Box } from "@mui/material";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { Table } from "src/components/Table";
import { IUser } from "src/components/Table/types";
import { useModalNavigate, useSearchUser } from "src/hooks";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getAllUsers } from "src/store/selectors/userSelector";
import { setInitialUsers } from "src/store/slices/usersSlice";
import { db } from "src/utils/firebase";

export const About = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const users = useAppSelector(getAllUsers);

  const [usersFromDB, setUsersFromDB] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { show, showModal } = useModalNavigate();

  const { filteredUsers, handleSearchName, searchValueName, setFilteredUsers } =
    useSearchUser();

  useEffect(() => {
    dispatch(setInitialUsers(usersFromDB));
    setFilteredUsers(users);
  }, [dispatch, setFilteredUsers, users, usersFromDB]);

  useEffect(() => {
    onSnapshot(collection(db, "usersDB"), (querySnapshot) => {
      const users: any[] = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsersFromDB(users);
    });
  }, []);

  useEffect(() => {
    if (filteredUsers?.length && isLoading) {
      setIsLoading(!isLoading);
    }
  }, [filteredUsers, isLoading]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "30px 0",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchInput
        searchValue={searchValueName}
        handleSearch={handleSearchName}
        placeholder={t("search.input")}
      />
      <ModalForm show={show} showModal={showModal} />
      {isLoading ? (
        <div> {t("loadingData")}</div>
      ) : (
        <div>
          {filteredUsers?.length > 0 ? (
            <Table data={filteredUsers} />
          ) : (
            <p> {t("noData")}</p>
          )}
        </div>
      )}
    </Box>
  );
};
