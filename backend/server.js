import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/studentRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);  // 👈 handles /api/auth/login
app.use("/api/students", studentRoutes); // 👈 handles /api/students/add, /api/students/all
app.use("/api/applications", applicationRoutes); // 👈 handles /api/applications/apply, /api/applications/all

// Default route
app.get("/", (req, res) => {
  res.send("Campus Placement Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
