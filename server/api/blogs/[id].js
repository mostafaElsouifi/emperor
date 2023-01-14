import Blog from "../../models/blog";

export default defineEventHandler(async (event) => {
  let output;
  await Blog.findById(event.context.params.id)
    .populate("products")
    .then((doc) => {
      if (!doc.products) console.log("populate failed");

      output = doc;
    })
    .catch((err) => console.log(err));

  return output;
});
