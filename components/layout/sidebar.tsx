"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  AlertCircle,
  TrendingUp,
} from "lucide-react"

interface SidebarProps {
  role: "student" | "mentor" | "admin"
  userName: string
}

export default function Sidebar({ role, userName }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = {
    student: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/student" },
      { icon: Briefcase, label: "Job Openings", href: "/dashboard/student/jobs" },
      { icon: TrendingUp, label: "Recommendations", href: "/dashboard/student/recommendations" },
      { icon: AlertCircle, label: "Alerts", href: "/dashboard/student/alerts" },
      { icon: BarChart3, label: "Performance", href: "/dashboard/student/performance" },
      { icon: MessageSquare, label: "Messages", href: "/dashboard/student/messages" },
    ],
    mentor: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/mentor" },
      { icon: Users, label: "My Students", href: "/dashboard/mentor/students" },
      { icon: MessageSquare, label: "Messages", href: "/dashboard/mentor/messages" },
      { icon: BarChart3, label: "Analytics", href: "/dashboard/mentor/analytics" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard/admin" },
      { icon: Users, label: "Manage Users", href: "/dashboard/admin/users" },
      { icon: Briefcase, label: "Companies", href: "/dashboard/admin/companies" },
      { icon: BarChart3, label: "Analytics", href: "/dashboard/admin/analytics" },
      { icon: Settings, label: "Settings", href: "/dashboard/admin/settings" },
    ],
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/")
  }

  const items = menuItems[role]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-slate-800 rounded-lg text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CP</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-sm">Campus Placement</h1>
              <p className="text-xs text-slate-400 capitalize">{role} Portal</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-2 flex-1">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      : "text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-700 space-y-3">
          <div className="px-4 py-2 bg-slate-700/30 rounded-lg">
            <p className="text-xs text-slate-400">Logged in as</p>
            <p className="text-sm text-white font-medium truncate">{userName}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
