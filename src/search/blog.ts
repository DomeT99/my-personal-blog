import { create, insert } from "@orama/orama";
import posts from "../data/blog-posts.json";

export default async function fill() {
  const blogDB = await create({
    id: "blog",
    schema: {
      title: "string",
      description: "string",
      url: "string",
    } as const,
  });

  for (const post of posts) {
    await insert(blogDB, {
      title: post.title,
      description: post.description,
      url: post.url,
    });
  }

  return {
    instance: blogDB,
    params: {
      tolerance: 1,
      limit: 5,
      boost: {
        title: 5,
        content: 0.1,
      },
    },
  };
}
