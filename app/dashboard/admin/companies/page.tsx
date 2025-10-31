"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Edit2, Trash2 } from "lucide-react"

const companies = [
  {
    id: 1,
    name: "Google",
    industry: "Technology",
    location: "Bangalore",
    openings: 5,
    applicants: 245,
    status: "active",
    avgSalary: "₹30 LPA",
  },
  {
    id: 2,
    name: "Microsoft",
    industry: "Technology",
    location: "Hyderabad",
    openings: 3,
    applicants: 156,
    status: "active",
    avgSalary: "₹26 LPA",
  },
  {
    id: 3,
    name: "Amazon",
    industry: "Technology",
    location: "Bangalore",
    openings: 7,
    applicants: 312,
    status: "active",
    avgSalary: "₹24 LPA",
  },
  {
    id: 4,
    name: "Meta",
    industry: "Technology",
    location: "Bangalore",
    openings: 2,
    applicants: 189,
    status: "active",
    avgSalary: "₹28 LPA",
  },
  {
    id: 5,
    name: "Apple",
    industry: "Technology",
    location: "Bangalore",
    openings: 4,
    applicants: 98,
    status: "inactive",
    avgSalary: "₹29 LPA",
  },
]

export default function CompaniesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Companies</h1>
          <p className="text-slate-400 mt-1">View and manage recruiting companies</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus size={18} className="mr-2" />
          Add Company
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Total Companies</p>
            <p className="text-3xl font-bold text-white mt-2">28</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Active Drives</p>
            <p className="text-3xl font-bold text-white mt-2">12</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Total Openings</p>
            <p className="text-3xl font-bold text-white mt-2">156</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Total Applicants</p>
            <p className="text-3xl font-bold text-white mt-2">1,000+</p>
          </CardContent>
        </Card>
      </div>

      {/* Companies Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Company</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Industry</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Location</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Openings</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Applicants</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Avg Salary</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => (
                  <tr key={company.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white font-medium">{company.name}</td>
                    <td className="py-3 px-4 text-slate-400">{company.industry}</td>
                    <td className="py-3 px-4 text-slate-400">{company.location}</td>
                    <td className="py-3 px-4 text-white">{company.openings}</td>
                    <td className="py-3 px-4 text-white">{company.applicants}</td>
                    <td className="py-3 px-4 text-white font-medium">{company.avgSalary}</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          company.status === "active"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-red-500/20 text-red-300 border-red-500/30"
                        }
                      >
                        {company.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 bg-transparent">
                          <Edit2 size={16} />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-600 text-red-300 bg-transparent hover:bg-red-500/10"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
