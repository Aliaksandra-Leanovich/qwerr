export const useConvertDate = (date: string) => {
  let tempDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let newDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(tempDate)
  );

  return { newDate };
};
