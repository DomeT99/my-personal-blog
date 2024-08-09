 export const getFormattedDate = (date: Date) => date.toString().split("T")[0];
 export const getFormattedDescription = (desc: string) => desc.slice(10, 100);
