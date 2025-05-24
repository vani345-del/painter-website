const express = require("express");
const cors = require("cors");
const path = require('path');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const nodemailer=require("nodemailer")
require("dotenv").config();


const app = express();
const PORT = 5000;

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const galleryRoutes = require("./routes/gallery");
const verifyToken = require("./middleware/verifyToken");


// Core Middlewares
app.use(cors());
app.use(express.json());
app.use('/upload', express.static(path.join(__dirname, 'upload')));

// Routes
app.use("/api/gallery", galleryRoutes);


// Login Route
app.post("/api/login", (req, res) => {
  const { password } = req.body;

  if (password === ADMIN_PASSWORD) {
    const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "2h" });
    return res.json({ token });
  }

  return res.status(401).json({ message: "Invalid password" });
});

//welcome page
app.get('/',(req,res)=>{
    res.send("Wlcome to the page");
});



//user mail nodemailer
app.post('/',async(req,res)=>{
      
  const {name,phoneNumber,address}=req.body;
  
  const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:process.env.CLIENT_EMAIL,
    pass: process.env.CLIENT_PASSWOARD,
  },
});

  // Email options
  const mailOptions = {
    from: process.env.CLIENT_EMAIL,          // Sender
    to: process.env.CLIENT_EMAIL,        // 🔁 Your CLIENT's email address
    subject: `New Contact Submission from ${name}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
    
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Message:</strong></p>
      <p>${address}</p>
    `,
  };
  try {
     await transporter.sendMail(mailOptions);
    res.status(200).send("✅ Message sent to your client.");
  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).send("❌ Failed to send message.");
  }


})







// Optional Protected Test Route
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "This is protected content only for admin." });
});

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Start Server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
