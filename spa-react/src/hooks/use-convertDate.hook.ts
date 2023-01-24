export const useConvertDate = (seconds: number) => {
  let date = new Date(seconds * 1000);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let newDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(date)
  );

  return { newDate };
};
