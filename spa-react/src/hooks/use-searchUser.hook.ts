import { ChangeEvent, useState } from "react";
import { IUser } from "src/components/TableWithUsers/types";

export const useSearchUser = (users: IUser[]) => {
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
  const [searchValueName, setSearchValue] = useState<string>("");
  const handleSearchName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    setFilteredUsers(
      users?.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return { filteredUsers, handleSearchName, searchValueName };
};
