"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, AlertCircle } from "lucide-react"

const studentsList = [
  { id: 1, name: "Raj Kumar", cgpa: 8.5, status: "Active", readiness: 85 },
  { id: 2, name: "Priya Sharma", cgpa: 8.2, status: "Active", readiness: 78 },
  { id: 3, name: "Amit Patel", cgpa: 7.8, status: "Needs Support", readiness: 65 },
]

export default function MentorDashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Mentor Dashboard</h1>
        <p className="text-slate-400 mt-1">Manage and support your assigned students</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Assigned Students</p>
                <p className="text-2xl font-bold text-white mt-1">12</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Avg Readiness</p>
                <p className="text-2xl font-bold text-white mt-1">76%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Pending Messages</p>
                <p className="text-2xl font-bold text-white mt-1">5</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">My Students</CardTitle>
          <CardDescription className="text-slate-400">Track student progress and readiness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {studentsList.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div className="flex-1">
                  <p className="text-white font-medium">{student.name}</p>
                  <p className="text-xs text-slate-400">CGPA: {student.cgpa}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm font-medium ${student.status === "Active" ? "text-green-400" : "text-yellow-400"}`}
                  >
                    {student.status}
                  </p>
                  <p className="text-xs text-slate-400">Readiness: {student.readiness}%</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
