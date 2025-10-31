import express from "express";
import Application from "../models/application.js";

const router = express.Router();

// POST /api/applications/apply - Apply for a job
router.post("/apply", async (req, res) => {
  try {
    const { studentId, name, email, company, position } = req.body;
    const newApplication = new Application({ studentId, name, email, company, position });
    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error submitting application", error });
  }
});

// GET /api/applications/all - Get all applications
router.get("/all", async (req, res) => {
  try {
    const applications = await Application.find().populate('studentId');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching applications", error });
  }
});

// GET /api/applications/student/:studentId - Get applications for a specific student
router.get("/student/:studentId", async (req, res) => {
  try {
    const applications = await Application.find({ studentId: req.params.studentId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student applications", error });
  }
});

// PUT /api/applications/:id/status - Update application status
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    res.json({ message: "Application status updated", application });
  } catch (error) {
    res.status(500).json({ message: "Error updating application status", error });
  }
});

export default router;
