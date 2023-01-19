import uuid from "react-uuid";
import { date } from "src/utils";
import { useCalculateCode } from "./use-calculateCode.hook";

export const useGenerateUsers = () => {
  const usersCount = 3;
  const { calculateCodeSum } = useCalculateCode();
  const firstname = [
    "Marquis",
    "Samir",
    "Adrien",
    "Joyce",
    "Pierce",
    "Juliette",
    "Kelton",
    "Jacob",
    "Isiah",
    "Lindsay",
    "Kian",
    "Jordyn",
    "Jaquan",
    "Anya",
    "Wayne",
    "Khalil",
  ];
  const lastname = [
    "Mills",
    "Mercer",
    "Reeves",
    "Hines",
    "Sanford",
    "Irwin",
    "Koch",
    "Hinton",
    "Estes",
    "Jackson",
    "Lowe",
    "Guerra",
    "Pineda",
    "Franco",
    "Cowan",
    "Krause",
  ];

  const generateUsers = () => {
    const rand_first = firstname[Math.floor(Math.random() * firstname.length)];
    const rand_last = lastname[Math.floor(Math.random() * lastname.length)];

    let sum = calculateCodeSum(rand_last);

    return {
      name: rand_first,
      surname: rand_last,
      id: uuid(),
      date: date,
      sum: sum,
    };
  };

  const generatedUsers = [
    ...new Set(Array.from({ length: usersCount }, () => generateUsers())),
  ];

  return { generateUsers, generatedUsers };
};
