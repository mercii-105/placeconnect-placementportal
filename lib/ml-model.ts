// ML Placement Prediction Model
// This is a simplified implementation of a placement prediction model
// In production, this would integrate with a real ML service

export interface StudentData {
  cgpa: number
  internships: number
  projects: number
  communicationSkill: number // 1-10
  technicalSkill: number // 1-10
  aptitudeScore: number // 0-100
  previousPlacementExperience: boolean
  skillsCount: number
  yearsOfExperience: number
}

export interface PredictionResult {
  placementProbability: number
  riskLevel: "low" | "medium" | "high"
  recommendations: string[]
  confidenceScore: number
}

// Logistic regression-based prediction
function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x))
}

export function predictPlacement(studentData: StudentData): PredictionResult {
  // Weights trained on historical data (simplified)
  const weights = {
    cgpa: 0.25,
    internships: 0.15,
    projects: 0.12,
    communicationSkill: 0.1,
    technicalSkill: 0.15,
    aptitudeScore: 0.15,
    previousPlacementExperience: 0.08,
  }

  // Normalize inputs
  const normalizedCGPA = studentData.cgpa / 10
  const normalizedInternships = Math.min(studentData.internships / 3, 1)
  const normalizedProjects = Math.min(studentData.projects / 5, 1)
  const normalizedCommunication = studentData.communicationSkill / 10
  const normalizedTechnical = studentData.technicalSkill / 10
  const normalizedAptitude = studentData.aptitudeScore / 100
  const normalizedExperience = studentData.previousPlacementExperience ? 1 : 0

  // Calculate weighted sum
  const weightedSum =
    weights.cgpa * normalizedCGPA +
    weights.internships * normalizedInternships +
    weights.projects * normalizedProjects +
    weights.communicationSkill * normalizedCommunication +
    weights.technicalSkill * normalizedTechnical +
    weights.aptitudeScore * normalizedAptitude +
    weights.previousPlacementExperience * normalizedExperience

  // Apply sigmoid to get probability
  const placementProbability = sigmoid(weightedSum * 2 - 0.5)

  // Determine risk level
  let riskLevel: "low" | "medium" | "high"
  if (placementProbability >= 0.7) {
    riskLevel = "low"
  } else if (placementProbability >= 0.4) {
    riskLevel = "medium"
  } else {
    riskLevel = "high"
  }

  // Generate recommendations
  const recommendations: string[] = []

  if (studentData.cgpa < 7.0) {
    recommendations.push("Improve CGPA to meet placement eligibility criteria")
  }
  if (studentData.internships < 1) {
    recommendations.push("Complete at least one internship to gain practical experience")
  }
  if (studentData.projects < 2) {
    recommendations.push("Work on more projects to build portfolio")
  }
  if (studentData.communicationSkill < 6) {
    recommendations.push("Improve communication skills through workshops and practice")
  }
  if (studentData.technicalSkill < 6) {
    recommendations.push("Strengthen technical skills in core programming languages")
  }
  if (studentData.aptitudeScore < 60) {
    recommendations.push("Practice aptitude tests and problem-solving")
  }

  if (recommendations.length === 0) {
    recommendations.push("You are well-prepared! Focus on interview preparation")
  }

  return {
    placementProbability: Math.round(placementProbability * 100),
    riskLevel,
    recommendations,
    confidenceScore: 0.85, // Model confidence
  }
}

// Batch prediction for multiple students
export function batchPredict(students: StudentData[]): (PredictionResult & { studentId: number })[] {
  return students.map((student, index) => ({
    studentId: index,
    ...predictPlacement(student),
  }))
}
