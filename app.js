require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { nanoid } = require("nanoid");

const URLModel = require("./models/URL"); // renamed to avoid clashing with global URL class

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Error");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.render("index", {
    shortUrl: null
  });
});

app.post("/shorten", async (req, res) => {
  const originalUrl = req.body.originalUrl;

  // validate BEFORE saving anything
  try {
    new URL(originalUrl); // global URL class, now unambiguous
  } catch {
    return res.send("Invalid URL");
  }

  const shortCode = nanoid(6);

  const newURL = new URLModel({
    originalUrl,
    shortCode
  });

  await newURL.save();

  const shortUrl = `http://localhost:3000/${shortCode}`;

  res.render("index", { shortUrl });
});

// specific routes must come BEFORE the catch-all "/:shortCode"
app.get("/analytics", async (req, res) => {
  const urls = await URLModel.find().sort({ createdAt: -1 });
  res.render("analytics", { urls });
});

app.get("/:shortCode", async (req, res) => {
  const url = await URLModel.findOne({
    shortCode: req.params.shortCode
  });

  if (!url) {
    return res.send("Short URL not found.");
  }

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});