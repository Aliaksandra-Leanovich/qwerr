import { ChangeEvent, useState } from "react";
import { IUser } from "src/components/Table/types";
import { useAppSelector } from "src/store/hooks";
import { getAllUsers } from "src/store/selectors/userSelector";

export const useSearchUser = () => {
  const users = useAppSelector(getAllUsers);

  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
  const [searchValueName, setSearchValue] = useState<string>("");
  const handleSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    setFilteredUsers(
      users.filter((user: IUser) => {
        return (
          user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.surname.toLowerCase().includes(e.target.value.toLowerCase())
        );
      })
    );
  };

  return {
    filteredUsers,
    handleSearchName,
    searchValueName,
    setFilteredUsers,
  };
};
