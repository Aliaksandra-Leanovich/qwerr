import { ModalForm } from "src/components/ModalForm/ModalForm";
import SearchInput from "src/components/SearchInput/SearchInput";
import { TableWithUsers } from "src/components/TableWithUsers/TableWithUsers";
import { useGetUsersFromDB } from "src/hooks/use-getUsers.hook";
import { useSearchUser } from "src/hooks/use-searchUser.hook";
import { useSetUsersToDb } from "src/hooks/use-steUsers.hook";

export const About = () => {
  const users = {
    users: [
      {
        name: "Alex",
        surname: "ALex",
        id: "1",
        date: new Date().toLocaleString(),
      },
      {
        name: "Anna",
        surname: "Anna1",
        id: "1",
        date: new Date().toLocaleString(),
      },
      {
        name: "Leonid",
        surname: "Leonid1",
        id: "1",
        date: new Date().toLocaleString(),
      },
    ],
  };
  useSetUsersToDb(users);

  const usersFromDB1 = users.users;
  const { usersFromDB } = useGetUsersFromDB();

  const { filteredUsers, handleSearchName, searchValueName } =
    useSearchUser(usersFromDB1);

  console.log(usersFromDB);

  return (
    <>
      <SearchInput
        searchValue={searchValueName}
        handleSearch={handleSearchName}
        placeholder="search by name"
      />
      <TableWithUsers data={usersFromDB} />
      {filteredUsers!.length > 0 ? (
        filteredUsers?.map((user) => {
          return (
            <div key={user.name}>
              <p>{user.name}</p>
            </div>
          );
        })
      ) : (
        <p>Oooops 🙈</p>
      )}
      <ModalForm />
    </>
  );
};
