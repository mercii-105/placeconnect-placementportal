"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import PlacementFunnel from "@/components/charts/placement-funnel"
import SkillHeatmap from "@/components/charts/skill-heatmap"
import CompanyComparison from "@/components/charts/company-comparison"
import TimelineChart from "@/components/charts/timeline-chart"

export default function ReportsPage() {
  const handleExportReport = (format: string) => {
    console.log(`Exporting report as ${format}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports & Insights</h1>
          <p className="text-slate-400 mt-1">Comprehensive placement analytics and visualizations</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => handleExportReport("pdf")}
            variant="outline"
            className="border-slate-600 text-slate-300 bg-transparent"
          >
            <Download size={18} className="mr-2" />
            Export PDF
          </Button>
          <Button
            onClick={() => handleExportReport("csv")}
            variant="outline"
            className="border-slate-600 text-slate-300 bg-transparent"
          >
            <FileText size={18} className="mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Placement Rate</p>
            <p className="text-3xl font-bold text-white mt-2">59.6%</p>
            <p className="text-xs text-green-400 mt-1">↑ 5.2% from last year</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Avg Package</p>
            <p className="text-3xl font-bold text-white mt-2">₹27.5 LPA</p>
            <p className="text-xs text-green-400 mt-1">↑ ₹2.1 LPA from last year</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Highest Package</p>
            <p className="text-3xl font-bold text-white mt-2">₹45 LPA</p>
            <p className="text-xs text-slate-500 mt-1">Google - AI/ML Role</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="pt-6">
            <p className="text-slate-400 text-sm">Companies Visited</p>
            <p className="text-3xl font-bold text-white mt-2">28</p>
            <p className="text-xs text-slate-500 mt-1">This academic year</p>
          </CardContent>
        </Card>
      </div>

      {/* Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlacementFunnel />
        <TimelineChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SkillHeatmap />
        <CompanyComparison />
      </div>

      {/* Export Options */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Generate Custom Reports</CardTitle>
          <CardDescription className="text-slate-400">
            Create detailed reports for specific departments or time periods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">Department Report</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Gender Analysis</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Salary Analysis</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
