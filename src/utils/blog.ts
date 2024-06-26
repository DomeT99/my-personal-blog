import { getCollection } from "astro:content";

export const fetchCollection = async () => (await getCollection("post")).filter(x => x.data.date.getFullYear() > new Date().getFullYear() - 1);
