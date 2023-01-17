import { useEffect } from "react";
import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { TableWithUsers } from "src/components/TableWithUsers/TableWithUsers";
import {
  useGenerateUsers,
  useGetUsersFromDB,
  useModalNavigate,
  useSearchUser,
  useSetUsersToDb,
} from "src/hooks";

export const About = () => {
  const { users, generateUsers } = useGenerateUsers();
  const { setUsersToDB } = useSetUsersToDb(users);
  const { getUsers, usersFromDB } = useGetUsersFromDB();
  const { show, showModal } = useModalNavigate();

  useEffect(() => {
    generateUsers();
    setUsersToDB();
    getUsers();
  }, []);

  const { filteredUsers, handleSearchName, searchValueName } = useSearchUser(
    users.users
  );
  console.log(filteredUsers);
  return (
    <>
      <SearchInput
        searchValue={searchValueName}
        handleSearch={handleSearchName}
        placeholder="search by name"
      />
      <ModalForm show={show} showModal={showModal} />
      {usersFromDB && (
        <div>
          {filteredUsers!.length > 0 ? (
            <TableWithUsers data={filteredUsers} />
          ) : (
            <p>Oooops 🙈</p>
          )}
        </div>
      )}
    </>
  );
};
