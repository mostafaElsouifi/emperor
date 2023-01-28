import Blog from "../models/blog";
export default defineEventHandler(async () => {
  const blogs = await Blog.find({});
  const blogsRoutes = blogs.map((b) => `blogs/${b._id}`);
  return blogsRoutes;
});
