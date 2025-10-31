export interface StudentProfile {
  cgpa: number
  skills: string[]
  specialization: string
  experience?: string
  projects?: string[]
}

export interface CompanyProfile {
  id: number
  name: string
  requiredSkills: string[]
  minCGPA: number
  specializations: string[]
  avgSalary: number
}

export function calculateMatchScore(student: StudentProfile, company: CompanyProfile): number {
  let score = 0

  // CGPA match (40%)
  if (student.cgpa >= company.minCGPA) {
    score += 40
  } else {
    score += (student.cgpa / company.minCGPA) * 40
  }

  // Skills match (40%)
  const matchedSkills = student.skills.filter((skill) => company.requiredSkills.includes(skill))
  const skillScore = (matchedSkills.length / company.requiredSkills.length) * 40
  score += skillScore

  // Specialization match (20%)
  if (company.specializations.includes(student.specialization)) {
    score += 20
  }

  return Math.round(score)
}

export function getRecommendations(
  student: StudentProfile,
  companies: CompanyProfile[],
): (CompanyProfile & { matchScore: number })[] {
  return companies
    .map((company) => ({
      ...company,
      matchScore: calculateMatchScore(student, company),
    }))
    .filter((company) => company.matchScore >= 60)
    .sort((a, b) => b.matchScore - a.matchScore)
}
