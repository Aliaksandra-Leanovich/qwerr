import { useEffect } from "react";
import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { TableWithUsers } from "src/components/TableWithUsers/TableWithUsers";
import {
  useCreateUsers,
  useGetUsersFromDB,
  useModalNavigate,
  useSearchUser,
  useSetUsersToDb,
} from "src/hooks";

// export const users = {
//   users: [
//     {
//       name: "Alex",
//       surname: "Stesh",
//       id: "1",
//       date: new Date().toLocaleString().slice(0, 10).replace(/-/g, "/"),
//     },
//   ],
// };

export const About = () => {
  const { users, generateUsers } = useCreateUsers();
  const { setUsersToDB } = useSetUsersToDb(users);
  const { getUsers, usersFromDB } = useGetUsersFromDB();
  const { show, showModal } = useModalNavigate();

  useEffect(() => {
    for (let i = 1; i <= 100; i++) {
      generateUsers();
    }
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
