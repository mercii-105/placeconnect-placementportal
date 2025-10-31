import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const alerts = [
      {
        id: 1,
        type: "placement-drive",
        title: "Google Placement Drive",
        description: "Registration opens on December 15, 2024",
        date: "2024-12-15",
        priority: "high",
        icon: "AlertCircle",
      },
      {
        id: 2,
        type: "interview",
        title: "Interview Scheduled",
        description: "Microsoft - Technical Round at 2:00 PM",
        date: "2024-12-10",
        priority: "high",
        icon: "Clock",
      },
      {
        id: 3,
        type: "performance",
        title: "CGPA Improved",
        description: "Your CGPA increased to 8.5 this semester",
        date: "2024-12-08",
        priority: "medium",
        icon: "TrendingUp",
      },
      {
        id: 4,
        type: "application",
        title: "Application Accepted",
        description: "Amazon has accepted your application for Backend Developer role",
        date: "2024-12-05",
        priority: "medium",
        icon: "CheckCircle",
      },
      {
        id: 5,
        type: "low-performance",
        title: "Low Performance Alert",
        description: "Your CGPA is below the placement eligibility threshold",
        date: "2024-12-03",
        priority: "high",
        icon: "AlertCircle",
      },
    ]

    return NextResponse.json({ alerts })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch alerts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { type, title, description, priority } = await request.json()

    const newAlert = {
      id: Math.random(),
      type,
      title,
      description,
      date: new Date().toISOString().split("T")[0],
      priority,
      icon: "AlertCircle",
    }

    return NextResponse.json({ alert: newAlert }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create alert" }, { status: 500 })
  }
}
