import Blog from "../../models/blog";
export default defineEventHandler(async () => {
  // select randomly blogs to appear in the main page
  const allBlogs = await Blog.aggregate([{ $sample: { size: 15 } }]).exec();

  return allBlogs;
});
