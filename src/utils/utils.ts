export const getFormattedDate = (date: Date) => date.toString().split("T")[0];
export const getFormattedDescription = (desc: string) => desc.slice(10, 100);
export const filterDate = (date: Date, monthsToFilter: number) =>
  date >= new Date(new Date().setMonth(new Date().getMonth() - monthsToFilter));
