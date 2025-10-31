import { type NextRequest, NextResponse } from "next/server"
import { predictPlacement, type StudentData } from "@/lib/ml-model"

export async function POST(request: NextRequest) {
  try {
    const studentData: StudentData = await request.json()

    // Validate input
    if (!studentData || typeof studentData.cgpa !== "number") {
      return NextResponse.json({ error: "Invalid student data" }, { status: 400 })
    }

    const prediction = predictPlacement(studentData)

    return NextResponse.json({
      success: true,
      prediction,
    })
  } catch (error) {
    console.error("Prediction error:", error)
    return NextResponse.json({ error: "Failed to generate prediction" }, { status: 500 })
  }
}
