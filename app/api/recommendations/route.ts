import { type NextRequest, NextResponse } from "next/server"

// Mock company database with skill requirements
const companies = [
  {
    id: 1,
    name: "Google",
    requiredSkills: ["Python", "System Design", "Data Structures"],
    minCGPA: 7.5,
    specializations: ["AI/ML", "Backend"],
    avgSalary: 30,
  },
  {
    id: 2,
    name: "Microsoft",
    requiredSkills: ["Azure", "DevOps", "Cloud"],
    minCGPA: 7.0,
    specializations: ["Cloud", "DevOps"],
    avgSalary: 26,
  },
  {
    id: 3,
    name: "Amazon",
    requiredSkills: ["Java", "Databases", "Scalability"],
    minCGPA: 6.8,
    specializations: ["Backend", "DevOps"],
    avgSalary: 24,
  },
  {
    id: 4,
    name: "Meta",
    requiredSkills: ["React", "TypeScript", "GraphQL"],
    minCGPA: 7.2,
    specializations: ["Frontend", "Full Stack"],
    avgSalary: 28,
  },
  {
    id: 5,
    name: "Apple",
    requiredSkills: ["iOS", "Swift", "Mobile"],
    minCGPA: 7.3,
    specializations: ["Mobile", "iOS"],
    avgSalary: 29,
  },
]

function calculateMatchScore(
  studentCGPA: number,
  studentSkills: string[],
  studentSpecialization: string,
  company: (typeof companies)[0],
): number {
  let score = 0

  // CGPA match (40%)
  if (studentCGPA >= company.minCGPA) {
    score += 40
  } else {
    score += (studentCGPA / company.minCGPA) * 40
  }

  // Skills match (40%)
  const matchedSkills = studentSkills.filter((skill) => company.requiredSkills.includes(skill))
  const skillScore = (matchedSkills.length / company.requiredSkills.length) * 40
  score += skillScore

  // Specialization match (20%)
  if (company.specializations.includes(studentSpecialization)) {
    score += 20
  }

  return Math.round(score)
}

export async function POST(request: NextRequest) {
  try {
    const { studentCGPA, studentSkills, studentSpecialization } = await request.json()

    const recommendations = companies
      .map((company) => ({
        ...company,
        matchScore: calculateMatchScore(studentCGPA, studentSkills, studentSpecialization, company),
      }))
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 5)

    return NextResponse.json({ recommendations })
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
