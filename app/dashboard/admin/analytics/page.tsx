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

const departmentData = [
  { name: "CSE", placed: 45, unplaced: 15, total: 60 },
  { name: "ECE", placed: 38, unplaced: 22, total: 60 },
  { name: "ME", placed: 32, unplaced: 28, total: 60 },
  { name: "CE", placed: 28, unplaced: 32, total: 60 },
]

const placementTrendData = [
  { month: "Aug", placed: 5, target: 10 },
  { month: "Sep", placed: 12, target: 20 },
  { month: "Oct", placed: 28, target: 40 },
  { month: "Nov", placed: 45, target: 60 },
  { month: "Dec", placed: 75, target: 100 },
]

const genderDistribution = [
  { name: "Male", value: 140, color: "#3b82f6" },
  { name: "Female", value: 100, color: "#ec4899" },
]

const salaryDistribution = [
  { range: "20-25 LPA", count: 35 },
  { range: "25-30 LPA", count: 65 },
  { range: "30-35 LPA", count: 28 },
  { range: "35+ LPA", count: 12 },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Analytics & Reports</h1>
        <p className="text-slate-400 mt-1">Comprehensive placement statistics and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Total Students</p>
            <p className="text-3xl font-bold text-white mt-2">240</p>
            <p className="text-xs text-slate-500 mt-1">All batches</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Placed</p>
            <p className="text-3xl font-bold text-white mt-2">143</p>
            <p className="text-xs text-green-400 mt-1">59.6% placement rate</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Avg Package</p>
            <p className="text-3xl font-bold text-white mt-2">₹27.5 LPA</p>
            <p className="text-xs text-slate-500 mt-1">Average salary</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Highest Package</p>
            <p className="text-3xl font-bold text-white mt-2">₹45 LPA</p>
            <p className="text-xs text-slate-500 mt-1">Record placement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Performance */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Department Performance</CardTitle>
            <CardDescription className="text-slate-400">Placement by department</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Legend />
                <Bar dataKey="placed" fill="#10b981" />
                <Bar dataKey="unplaced" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Placement Trend */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Placement Trend</CardTitle>
            <CardDescription className="text-slate-400">Monthly progress vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={placementTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Legend />
                <Line type="monotone" dataKey="placed" stroke="#06b6d4" strokeWidth={2} name="Placed" />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Target"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gender Distribution */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Gender Distribution</CardTitle>
            <CardDescription className="text-slate-400">Placement by gender</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={genderDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {genderDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Salary Distribution */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Salary Distribution</CardTitle>
            <CardDescription className="text-slate-400">Package ranges</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="range" stroke="#94a3b8" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Bar dataKey="count" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
