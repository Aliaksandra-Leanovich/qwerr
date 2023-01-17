export const useCreateUsers = () => {
  const users = {
    users: [
      {
        name: "Alex",
        surname: "Stesh",
        id: "1",
        date: new Date().toLocaleString().slice(0, 10).replace(/-/g, "/"),
      },
    ],
  };
  let firstname = [
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
  let lastname = [
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
    let rand_first = Math.floor(Math.random() * firstname.length);
    let rand_last = Math.floor(Math.random() * lastname.length);

    let userNew = {
      name: firstname[rand_first],
      surname: lastname[rand_last],
      id: "3",
      date: new Date("12/11/2020")
        .toLocaleString()
        .slice(0, 10)
        .replace(/-/g, "/"),
    };
    users.users.push(userNew);
  };

  return { users, generateUsers };
};
