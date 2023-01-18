export const useCalculateCode = () => {
  const calculateCodeSum = (string: string) => {
    let sum = 0;
    const array = string.split("");
    array.forEach((item) => {
      item.charCodeAt(0);
      sum = sum + item.charCodeAt(0);
    });
    return sum;
  };
  return { calculateCodeSum };
};
