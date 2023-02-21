const mongoose = require("mongoose");
const showTimeSchema = new mongoose.Schema(
  {
    typeMovie: {
      // thể loại phim chiếu
      type: String,
      required: true,
      trim: true,
    },
    startTime: [
      {
        nameScreen: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
      },
    ],
    startDate: {
      // ngày chiếu
      type: String,
      required: true,
      trim: true,
    },
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
    cinemaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cinema",
    },
  },
  { timestamps: true }
);

const ShowTime = mongoose.model("ShowTime", showTimeSchema);
module.exports = ShowTime;
