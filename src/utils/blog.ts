export async function getBlogPost() {
  return fetch(import.meta.env.DEVTO_URL, {
    headers: {
      'api-key': `${import.meta.env.DEVTO_TOKEN}`, 
    },
  });
}