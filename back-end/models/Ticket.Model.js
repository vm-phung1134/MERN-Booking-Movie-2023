const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema(
  {
    typeTicket: {
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
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
