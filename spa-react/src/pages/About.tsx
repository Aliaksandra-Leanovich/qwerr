import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { Table } from "src/components/Table/Table";
import {
  useGenerateUsers,
  useGetUsersFromDB,
  useModalNavigate,
  useSearchUser,
  useSetUsersToDb,
} from "src/hooks";

import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { getAllUsers } from "src/store/selectors/userSelector";
import { setInitialUsers } from "src/store/slices/usersSlice";

export const About = () => {
  const users = useAppSelector(getAllUsers);

  const { generateUsers } = useGenerateUsers();
  const { setUsersToDB } = useSetUsersToDb();
  const { getUsers, usersFromDB } = useGetUsersFromDB();

  const { show, showModal } = useModalNavigate();
  const { generatedUsers } = useGenerateUsers();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { filteredUsers, handleSearchName, searchValueName, setFilteredUsers } =
    useSearchUser();

  const dispatch = useAppDispatch();

  const putUsersToDb = () => {
    generatedUsers.forEach((user) => {
      setUsersToDB(user.id, user);
    });
  };

  useEffect(() => {
    dispatch(setInitialUsers(usersFromDB));
    setFilteredUsers(usersFromDB);
    console.log(users);
  }, [dispatch, usersFromDB]);

  useEffect(() => {
    generateUsers();
    putUsersToDb();
    getUsers();
  }, []);

  useEffect(() => {
    if (usersFromDB?.length && isLoading) {
      setIsLoading(!isLoading);
    }
  }, [users, isLoading, filteredUsers]);

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
        placeholder="Search by name/surname"
      />
      <ModalForm show={show} showModal={showModal} />
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <div>
            {filteredUsers?.length > 0 ? (
              <Table data={filteredUsers} />
            ) : (
              <p>Oooops 🙈</p>
            )}
          </div>
        </>
      )}
    </Box>
  );
};
