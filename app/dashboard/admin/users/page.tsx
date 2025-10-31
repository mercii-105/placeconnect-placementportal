"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit2, Trash2, Plus } from "lucide-react"

const users = [
  {
    id: 1,
    name: "Raj Kumar",
    email: "raj.kumar@campus.edu",
    role: "student",
    department: "CSE",
    status: "active",
    joinDate: "2022-08-15",
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    email: "priya.singh@campus.edu",
    role: "mentor",
    department: "CSE",
    status: "active",
    joinDate: "2020-01-10",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@campus.edu",
    role: "student",
    department: "CSE",
    status: "active",
    joinDate: "2022-08-15",
  },
  {
    id: 4,
    name: "Prof. Rajesh Kumar",
    email: "rajesh.kumar@campus.edu",
    role: "mentor",
    department: "CSE",
    status: "active",
    joinDate: "2019-06-20",
  },
  {
    id: 5,
    name: "Amit Patel",
    email: "amit.patel@campus.edu",
    role: "student",
    department: "CSE",
    status: "inactive",
    joinDate: "2022-08-15",
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "student":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "mentor":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "admin":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Users</h1>
          <p className="text-slate-400 mt-1">View and manage all system users</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus size={18} className="mr-2" />
          Add User
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-64">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-slate-500" size={18} />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
            />
          </div>
        </div>
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Roles</option>
          <option value="student">Students</option>
          <option value="mentor">Mentors</option>
          <option value="admin">Admins</option>
        </select>
      </div>

      {/* Users Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Email</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Role</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Department</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30">
                    <td className="py-3 px-4 text-white">{user.name}</td>
                    <td className="py-3 px-4 text-slate-400 text-sm">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{user.department}</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          user.status === "active"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-red-500/20 text-red-300 border-red-500/30"
                        }
                      >
                        {user.status}
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
