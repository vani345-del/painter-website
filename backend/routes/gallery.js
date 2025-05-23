// routes/gallery.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const GalleryImage = require("../models/GalleryImage");

// Upload new image
router.post("/upload", upload.single("image"), async (req, res) => {
  const { name } = req.body;
  const imageUrl = `/uploads/${req.file.filename}`;
  const newImage = new GalleryImage({ name, imageUrl });
  await newImage.save();
  res.json(newImage);
});

// Get all images
router.get("/", async (req, res) => {
  try {
    const images = await GalleryImage.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

// Edit image name
router.put("/:id", async (req, res) => {
  const { name } = req.body;
  const updated = await GalleryImage.findByIdAndUpdate(
    req.params.id,
    { name },
    { new: true }
  );
  res.json(updated);
});

// Delete image
router.delete("/:id", async (req, res) => {
  await GalleryImage.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
