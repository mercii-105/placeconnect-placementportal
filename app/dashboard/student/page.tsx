"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, AlertCircle, Briefcase, Users, UserPlus } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const performanceData = [
  { month: "Jan", cgpa: 7.5 },
  { month: "Feb", cgpa: 7.8 },
  { month: "Mar", cgpa: 8.0 },
  { month: "Apr", cgpa: 8.2 },
  { month: "May", cgpa: 8.5 },
  { month: "Jun", cgpa: 8.5 },
]

const recommendedCompanies = [
  { id: 1, name: "Google", match: 92, openings: 5 },
  { id: 2, name: "Microsoft", match: 88, openings: 3 },
  { id: 3, name: "Amazon", match: 85, openings: 7 },
  { id: 4, name: "Meta", match: 80, openings: 2 },
]

export default function StudentDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome, {user?.name}</h1>
          <p className="text-slate-400 mt-1">Track your placement journey and opportunities</p>
        </div>
        <Button
          onClick={() => router.push('/dashboard/student/register')}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Register New Student
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Current CGPA</p>
                <p className="text-2xl font-bold text-white mt-1">8.5</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Applications</p>
                <p className="text-2xl font-bold text-white mt-1">12</p>
              </div>
              <Briefcase className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Interviews</p>
                <p className="text-2xl font-bold text-white mt-1">3</p>
              </div>
              <Users className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Placement Status</p>
                <p className="text-2xl font-bold text-white mt-1">Pending</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">CGPA Trend</CardTitle>
            <CardDescription className="text-slate-400">Your academic performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Line type="monotone" dataKey="cgpa" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommended Companies */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Recommended Companies</CardTitle>
            <CardDescription className="text-slate-400">Based on your profile & skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendedCompanies.map((company) => (
                <div key={company.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{company.name}</p>
                    <p className="text-xs text-slate-400">{company.openings} openings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{company.match}%</p>
                    <p className="text-xs text-slate-400">Match</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Google Placement Drive</p>
                <p className="text-slate-400 text-xs">Registrations open on Dec 15, 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Interview Scheduled</p>
                <p className="text-slate-400 text-xs">Microsoft - Dec 10, 2024 at 2:00 PM</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
