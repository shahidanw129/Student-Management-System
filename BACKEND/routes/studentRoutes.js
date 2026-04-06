const express = require("express");
const router = express.Router();
const User = require("../models/user");


// CREATE (FIXED ✅)
router.post("/student", async (req, res) => {
  try {
    const { email } = req.body;

    // 🔥 NEW LINE (duplicate check)
    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "Student already exists ❌" });
    }

    const user = new User(req.body);
    await user.save();

    res.json({ message: "Student Added ✅", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// READ
router.get("/student", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// UPDATE
router.put("/student/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// DELETE
router.delete("/student/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;