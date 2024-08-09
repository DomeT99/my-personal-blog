export async function getRepoData(owner: string, repo: string) {
  return fetch(import.meta.env.GITHUB_URL + owner + "/" + repo, {
    headers: {
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
}
