import type { Load } from '@sveltejs/kit';


export const load: Load = async ({ params,}) => {
  const post = await import(`../${params.slug}.md`)
  console.log(`../${params.slug}.md`)
  const {author, date, title, description} = post.metadata
  const content = post.default

  return {
    author, 
    date, 
    title, 
    description,
    content
  };
}