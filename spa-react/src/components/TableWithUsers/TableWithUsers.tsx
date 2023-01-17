import { IProps } from "./types";

export const TableWithUsers = ({ data }: IProps) => {
  //   const sortedByDate = () => {
  //     let newArr = data.forEach((date) => {
  //       const [day, month, year] = date.date.split("/");

  //       return new Date(`${month}.${day}.${year}`)
  //         .toLocaleDateString()
  //         .replaceAll("/", ".");
  //     });

  //     // let sortedArr = newArr.sort((objA, objB) => Number(objA.date) - Number(objB.date))
  //     // })
  //     console.log(newArr);
  //   };
  //   sortedByDate();

  return (
    <div>
      {data?.map((user, index) => (
        <li key={index}>
          {user.id} {user.name} {user.date} {user.surname}
        </li>
      ))}
    </div>
  );
};
