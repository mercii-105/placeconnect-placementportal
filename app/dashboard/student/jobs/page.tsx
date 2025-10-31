"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, DollarSign } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    location: "Bangalore, India",
    salary: "₹25-35 LPA",
    skills: ["Python", "React", "System Design"],
    applicants: 245,
    deadline: "2024-12-20",
    description: "Join Google as a Software Engineer and work on cutting-edge technologies.",
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Cloud Solutions Architect",
    location: "Hyderabad, India",
    salary: "₹22-30 LPA",
    skills: ["Azure", "AWS", "DevOps"],
    applicants: 156,
    deadline: "2024-12-18",
    description: "Design and implement cloud solutions for enterprise clients.",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Backend Developer",
    location: "Bangalore, India",
    salary: "₹20-28 LPA",
    skills: ["Java", "Node.js", "Databases"],
    applicants: 312,
    deadline: "2024-12-25",
    description: "Build scalable backend systems for Amazon Web Services.",
  },
  {
    id: 4,
    company: "Meta",
    position: "Frontend Engineer",
    location: "Bangalore, India",
    salary: "₹24-32 LPA",
    skills: ["React", "TypeScript", "GraphQL"],
    applicants: 189,
    deadline: "2024-12-22",
    description: "Create engaging user experiences for billions of users.",
  },
]

export default function JobOpeningsPage() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobOpenings)[0] | null>(null)
  const [appliedJobs, setAppliedJobs] = useState<number[]>([])
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleApply = async (jobId: number) => {
    if (!appliedJobs.includes(jobId) && user) {
      setIsLoading(true)
      try {
        const job = jobOpenings.find(j => j.id === jobId)
        if (job) {
          const response = await fetch("http://localhost:5000/api/applications/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              studentId: user.id,
              name: user.name,
              email: user.email,
              company: job.company,
              position: job.position,
            }),
          })

          if (response.ok) {
            setAppliedJobs([...appliedJobs, jobId])
            alert("Application submitted successfully!")
          } else {
            alert("Failed to submit application")
          }
        }
      } catch (error) {
        console.error("Error applying for job:", error)
        alert("An error occurred while applying")
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Job Openings</h1>
        <p className="text-slate-400 mt-1">Browse and apply to available positions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job List */}
        <div className="lg:col-span-2 space-y-3">
          {jobOpenings.map((job) => (
            <Card
              key={job.id}
              className={`bg-slate-800 border-slate-700 cursor-pointer transition-all ${
                selectedJob?.id === job.id ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.position}</h3>
                    <p className="text-slate-400 text-sm">{job.company}</p>
                  </div>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {job.applicants} applied
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill) => (
                    <Badge key={skill} className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">Deadline: {job.deadline}</p>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleApply(job.id)
                    }}
                    disabled={appliedJobs.includes(job.id) || isLoading}
                    className={appliedJobs.includes(job.id) ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}
                  >
                    {appliedJobs.includes(job.id) ? "Applied" : isLoading ? "Applying..." : "Apply Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Job Details */}
        <div>
          {selectedJob ? (
            <Card className="bg-slate-800 border-slate-700 sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">{selectedJob.position}</CardTitle>
                <CardDescription className="text-slate-400">{selectedJob.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">About</p>
                  <p className="text-slate-300 text-sm">{selectedJob.description}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide mb-2">Required Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill) => (
                      <Badge key={skill} className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
                  <div>
                    <p className="text-xs text-slate-400">Salary</p>
                    <p className="text-white font-bold">{selectedJob.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-white font-bold text-sm">{selectedJob.location}</p>
                  </div>
                </div>

                <Button
                  onClick={() => handleApply(selectedJob.id)}
                  disabled={appliedJobs.includes(selectedJob.id) || isLoading}
                  className={`w-full ${appliedJobs.includes(selectedJob.id) ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  {appliedJobs.includes(selectedJob.id) ? "Already Applied" : isLoading ? "Applying..." : "Apply Now"}
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6 text-center">
                <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">Select a job to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
