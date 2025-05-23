const mongoose = require("mongoose");

const GalleryImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GalleryImage", GalleryImageSchema);