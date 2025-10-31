import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { type: String, enum: ["applied", "shortlisted", "interviewed", "selected", "rejected"], default: "applied" },
  appliedDate: { type: Date, default: Date.now },
});

const Application = mongoose.model("Application", applicationSchema);

export default Application;
