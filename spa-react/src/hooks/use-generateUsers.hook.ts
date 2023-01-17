export const useGenerateUsers = () => {
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

    return {
      name: rand_first,
      surname: rand_last,
      id: "1",
      date: new Date().toLocaleString().slice(0, 10).replace(/-/g, "/"),
    };
  };

  const generatedUsers = [
    ...new Set(Array.from({ length: 100 }, () => generateUsers())),
  ];

  return { generateUsers, generatedUsers };
};
