/**
 * @param blogUrl - is of type -> ${slug}-${id}",
 */
export default function(blogUrl: string) {
  const pieces = blogUrl.split("-");
  const id = pieces.pop();
  const slug = pieces.join("-");
  return { slug, id };
}
