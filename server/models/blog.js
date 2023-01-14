const mongoose = require("mongoose");
const Product = require("./product");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  mainImage: {
    type: String,
    require: true,
  },
  intro: {
    type: String,
    require: true,
  },
  advantages: {
    type: Array,
    require: true,
  },
  disadavntages: {
    type: Array,
    require: true,
  },
  youtubeLink: String,
  products: [{ type: Schema.Types.ObjectId, ref: Product }],
});
module.exports = mongoose.model("Blog", blogSchema);
