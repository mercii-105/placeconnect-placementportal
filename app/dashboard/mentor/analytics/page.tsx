"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const studentReadinessData = [
  { name: "Raj Kumar", readiness: 85 },
  { name: "Priya Sharma", readiness: 78 },
  { name: "Amit Patel", readiness: 65 },
  { name: "Neha Singh", readiness: 92 },
]

const placementTrendData = [
  { month: "Aug", placed: 2, unplaced: 10 },
  { month: "Sep", placed: 3, unplaced: 9 },
  { month: "Oct", placed: 5, unplaced: 7 },
  { month: "Nov", placed: 7, unplaced: 5 },
  { month: "Dec", placed: 8, unplaced: 4 },
]

const skillDistribution = [
  { name: "Python", value: 4 },
  { name: "React", value: 3 },
  { name: "DevOps", value: 2 },
  { name: "Data Science", value: 1 },
]

export default function MentorAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Analytics</h1>
        <p className="text-slate-400 mt-1">Track your students' progress and placement metrics</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Total Students</p>
            <p className="text-3xl font-bold text-white mt-2">12</p>
            <p className="text-xs text-slate-500 mt-1">Assigned to you</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Placed</p>
            <p className="text-3xl font-bold text-white mt-2">8</p>
            <p className="text-xs text-green-400 mt-1">66.7% placement rate</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Avg Readiness</p>
            <p className="text-3xl font-bold text-white mt-2">80%</p>
            <p className="text-xs text-slate-500 mt-1">Overall score</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Avg CGPA</p>
            <p className="text-3xl font-bold text-white mt-2">8.1</p>
            <p className="text-xs text-slate-500 mt-1">Student average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Readiness */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Student Readiness</CardTitle>
            <CardDescription className="text-slate-400">Placement readiness scores</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={studentReadinessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Bar dataKey="readiness" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Placement Trend */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Placement Trend</CardTitle>
            <CardDescription className="text-slate-400">Monthly placement progress</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={placementTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Legend />
                <Line type="monotone" dataKey="placed" stroke="#10b981" strokeWidth={2} />
                <Line type="monotone" dataKey="unplaced" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Skill Distribution */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Top Skills Among Students</CardTitle>
          <CardDescription className="text-slate-400">Most common technical skills</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={skillDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {skillDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#3b82f6", "#06b6d4", "#10b981", "#f59e0b"][index]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
