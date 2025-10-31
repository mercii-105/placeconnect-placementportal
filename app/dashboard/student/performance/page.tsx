"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const cgpaData = [
  { semester: "S1", cgpa: 7.2 },
  { semester: "S2", cgpa: 7.5 },
  { semester: "S3", cgpa: 7.8 },
  { semester: "S4", cgpa: 8.0 },
  { semester: "S5", cgpa: 8.2 },
  { semester: "S6", cgpa: 8.5 },
]

const skillsData = [
  { skill: "Python", value: 90 },
  { skill: "React", value: 85 },
  { skill: "Node.js", value: 80 },
  { skill: "System Design", value: 75 },
  { skill: "Databases", value: 88 },
  { skill: "DevOps", value: 70 },
]

const assessmentData = [
  { name: "Coding", score: 88 },
  { name: "Communication", score: 82 },
  { name: "Problem Solving", score: 90 },
  { name: "Leadership", score: 78 },
  { name: "Teamwork", score: 85 },
]

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Performance Analytics</h1>
        <p className="text-slate-400 mt-1">Track your academic and skill development</p>
      </div>

      {/* CGPA Trend */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">CGPA Trend</CardTitle>
          <CardDescription className="text-slate-400">Your academic performance across semesters</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cgpaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="semester" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[7, 8.5]} />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              <Line type="monotone" dataKey="cgpa" stroke="#06b6d4" strokeWidth={3} dot={{ fill: "#06b6d4", r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills Assessment */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Skills Assessment</CardTitle>
            <CardDescription className="text-slate-400">Your technical skill levels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="skill" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Competency Radar */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Competency Profile</CardTitle>
            <CardDescription className="text-slate-400">Overall assessment scores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={assessmentData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="name" stroke="#94a3b8" />
                <PolarRadiusAxis stroke="#94a3b8" />
                <Radar name="Score" dataKey="score" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Current CGPA</p>
            <p className="text-3xl font-bold text-white mt-2">8.5</p>
            <p className="text-xs text-green-400 mt-1">↑ 0.3 from last semester</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Avg Assessment Score</p>
            <p className="text-3xl font-bold text-white mt-2">84.6</p>
            <p className="text-xs text-green-400 mt-1">Excellent performance</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Placement Readiness</p>
            <p className="text-3xl font-bold text-white mt-2">87%</p>
            <p className="text-xs text-green-400 mt-1">Ready for interviews</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
