import express from "express";
import Student from "../models/student.js";

const router = express.Router();

// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await Student.findOne({ email, role });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: "mock-jwt-token",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
