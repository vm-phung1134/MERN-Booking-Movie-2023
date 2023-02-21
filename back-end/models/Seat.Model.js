const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema(
  {
    startTimeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ShowTime",
    },
    seats: [
      {
        name: {
          type: String,
          required: true,
        },
        status: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Seat = mongoose.model("Seat", seatSchema);
module.exports = Seat;
