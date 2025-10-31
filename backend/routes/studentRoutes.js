import express from "express";
import Student from "../models/student.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { name, roll_number, email, password, role } = req.body;
    const newStudent = new Student({ name, roll_number, email, password, role });
    await newStudent.save();
    res.status(201).json({ message: "Student added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding student", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
});

export default router;
