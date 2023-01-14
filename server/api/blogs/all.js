import Blog from "../../models/blog";
export default defineEventHandler(async () => {
  const allBlogs = await Blog.find();
  return allBlogs;
});
