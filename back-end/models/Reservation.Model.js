const mongoose = require("mongoose");
const reservationSchema = new mongoose.Schema(
  {
    nameMovie: {
      type: String,
      required: true,
    },
    nameCinema: {
      type: String,
      required: true,
    },
    imgMovie: {
      type: String,
      required: true
    },
    tickets: [
      {
        typeTicket: {
          type: String,
          required: true,
        },
        discription: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    foods: [
      {
        typeFood: {
          type: String,
          required: true,
        },
        discription: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    startTime: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    seats:{
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    total: {
      type: Number,
      required: true,
    },
    typeCheckout: {
      type: String,
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);
module.exports = Reservation;
