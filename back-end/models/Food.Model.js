const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema(
  {
    typeFood: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
