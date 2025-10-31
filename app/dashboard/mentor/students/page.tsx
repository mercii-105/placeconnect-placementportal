"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

const studentsList = [
  {
    id: 1,
    name: "Raj Kumar",
    email: "raj.kumar@campus.edu",
    cgpa: 8.5,
    department: "CSE",
    specialization: "AI/ML",
    status: "Active",
    readiness: 85,
    applications: 12,
    interviews: 3,
    placed: false,
    skills: ["Python", "React", "ML"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@campus.edu",
    cgpa: 8.2,
    department: "CSE",
    specialization: "Web Development",
    status: "Active",
    readiness: 78,
    applications: 8,
    interviews: 2,
    placed: false,
    skills: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit.patel@campus.edu",
    cgpa: 7.8,
    department: "CSE",
    specialization: "DevOps",
    status: "Needs Support",
    readiness: 65,
    applications: 5,
    interviews: 1,
    placed: false,
    skills: ["Docker", "Kubernetes", "AWS"],
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha.singh@campus.edu",
    cgpa: 8.9,
    department: "CSE",
    specialization: "AI/ML",
    status: "Active",
    readiness: 92,
    applications: 15,
    interviews: 4,
    placed: true,
    skills: ["Python", "TensorFlow", "Data Science"],
  },
]

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<(typeof studentsList)[0] | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredStudents = studentsList.filter((s) => {
    if (filterStatus === "all") return true
    if (filterStatus === "placed") return s.placed
    if (filterStatus === "unplaced") return !s.placed
    if (filterStatus === "needs-support") return s.status === "Needs Support"
    return true
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Needs Support":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">My Students</h1>
        <p className="text-slate-400 mt-1">Track and manage your assigned students</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {["all", "placed", "unplaced", "needs-support"].map((filter) => (
          <Button
            key={filter}
            variant={filterStatus === filter ? "default" : "outline"}
            onClick={() => setFilterStatus(filter)}
            className={filterStatus === filter ? "bg-blue-600" : "border-slate-600 text-slate-300"}
          >
            {filter === "all" && "All Students"}
            {filter === "placed" && "Placed"}
            {filter === "unplaced" && "Unplaced"}
            {filter === "needs-support" && "Needs Support"}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Students List */}
        <div className="lg:col-span-2 space-y-3">
          {filteredStudents.map((student) => (
            <Card
              key={student.id}
              className={`bg-slate-800 border-slate-700 cursor-pointer transition-all ${
                selectedStudent?.id === student.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedStudent(student)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{student.name}</h3>
                    <p className="text-slate-400 text-sm">{student.specialization}</p>
                  </div>
                  <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3 text-center">
                  <div>
                    <p className="text-xs text-slate-400">CGPA</p>
                    <p className="text-white font-bold">{student.cgpa}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Readiness</p>
                    <p className="text-white font-bold">{student.readiness}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Apps</p>
                    <p className="text-white font-bold">{student.applications}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Interviews</p>
                    <p className="text-white font-bold">{student.interviews}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {student.skills.map((skill) => (
                    <Badge key={skill} className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Details */}
        <div>
          {selectedStudent ? (
            <Card className="bg-slate-800 border-slate-700 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">{selectedStudent.name}</CardTitle>
                <CardDescription className="text-slate-400">{selectedStudent.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-400">CGPA</p>
                    <p className="text-white font-bold text-lg">{selectedStudent.cgpa}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Readiness</p>
                    <p className="text-white font-bold text-lg">{selectedStudent.readiness}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Applications</p>
                    <p className="text-white font-bold text-lg">{selectedStudent.applications}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Interviews</p>
                    <p className="text-white font-bold text-lg">{selectedStudent.interviews}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.skills.map((skill) => (
                      <Badge key={skill} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Status</p>
                  <Badge className={getStatusColor(selectedStudent.status)}>{selectedStudent.status}</Badge>
                  {selectedStudent.placed && (
                    <div className="mt-2 flex items-center gap-2 text-green-400">
                      <CheckCircle size={16} />
                      <span className="text-sm">Placed</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Message</Button>
                  <Button variant="outline" className="flex-1 border-slate-600 text-slate-300 bg-transparent">
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <AlertCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">Select a student to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
