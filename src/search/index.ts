import { search } from "@orama/orama";
import getBlogDB from "./blog";
import getPostsDB from "./posts";

export const blogDB = await getBlogDB();
export const postsDB = await getPostsDB();

export default async function (term: string) {
  const result = [];

  for (let db of [postsDB]) {
    result.push({
      id: db.instance.id,
      output: search(db.instance, {
        term,
        ...db.params,
      }),
    });
  }

  return (await Promise.all(result.map((r) => r.output)))
    .map((r) => r.hits)
    .flat()
    .sort((a, b) => {
      return b.score - a.score;
    });
}
