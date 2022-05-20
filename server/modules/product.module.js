const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
      sparse: true,
      minlength: 5,
      maxlength: 40,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
      sparse: true,
      minlength: 20,
      maxlength: 100,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    inStock: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
