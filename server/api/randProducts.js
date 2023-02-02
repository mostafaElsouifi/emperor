import Product from "../models/product";
export default defineEventHandler(async () => {
  // select randomly blogs to appear in the main page
  const products = await Product.aggregate([{ $sample: { size: 3 } }]).exec();

  return products;
});
