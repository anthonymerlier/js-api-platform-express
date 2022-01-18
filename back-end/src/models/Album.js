const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  year: {
    type: Number,
  },
  artist: {
    type: String,
  },
});

const Album = mongoose.model("Album", AlbumSchema);

module.exports = Album;
