import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll_number: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "mentor", "admin"], default: "student" },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
