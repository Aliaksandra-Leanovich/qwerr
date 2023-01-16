import { useEffect } from "react";
import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { TableWithUsers } from "src/components/TableWithUsers/TableWithUsers";
import {
  useGetUsersFromDB,
  useModalNavigate,
  useSearchUser,
  useSetUsersToDb,
} from "src/hooks";

export const users = {
  users: [
    {
      name: "Alex",
      surname: "Stesh",
      id: "1",
      date: new Date().toLocaleString(),
    },
    {
      name: "Anna",
      surname: "Udin",
      id: "1",
      date: new Date().toLocaleString(),
    },
    {
      name: "Leonid",
      surname: "Agarov",
      id: "1",
      date: new Date().toLocaleString(),
    },
  ],
};

export const About = () => {
  const { setUsersToDB } = useSetUsersToDb(users);
  const { getUsers, usersFromDB } = useGetUsersFromDB();
  const { show, showModal } = useModalNavigate();

  useEffect(() => {
    setUsersToDB();
    getUsers();
  }, []);

  const { filteredUsers, handleSearchName, searchValueName } = useSearchUser(
    users.users
  );

  return (
    <>
      <SearchInput
        searchValue={searchValueName}
        handleSearch={handleSearchName}
        placeholder="search by name"
      />
      {usersFromDB && (
        <div>
          {filteredUsers!.length > 0 ? (
            <TableWithUsers data={filteredUsers} />
          ) : (
            <p>Oooops 🙈</p>
          )}
        </div>
      )}

      <ModalForm show={show} showModal={showModal} />
    </>
  );
};
