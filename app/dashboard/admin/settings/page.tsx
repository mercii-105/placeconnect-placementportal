"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 mt-1">Configure system settings and preferences</p>
      </div>

      {/* General Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">General Settings</CardTitle>
          <CardDescription className="text-slate-400">Basic system configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">Institution Name</Label>
            <Input defaultValue="Campus University" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
          <div>
            <Label className="text-slate-300">Academic Year</Label>
            <Input defaultValue="2024-2025" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
          <div>
            <Label className="text-slate-300">Placement Coordinator Email</Label>
            <Input defaultValue="coordinator@campus.edu" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Placement Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Placement Settings</CardTitle>
          <CardDescription className="text-slate-400">Configure placement parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-slate-300">Minimum CGPA for Placement</Label>
            <Input defaultValue="6.5" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
          <div>
            <Label className="text-slate-300">Minimum Attendance Required (%)</Label>
            <Input defaultValue="75" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
          <div>
            <Label className="text-slate-300">Placement Drive Registration Deadline (days)</Label>
            <Input defaultValue="7" className="mt-2 bg-slate-700 border-slate-600 text-white" />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Notification Settings</CardTitle>
          <CardDescription className="text-slate-400">Configure system notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-slate-300">Email Notifications</Label>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-slate-300">SMS Alerts</Label>
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <div className="flex items-center justify-between">
            <Label className="text-slate-300">In-App Notifications</Label>
            <input type="checkbox" defaultChecked className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="bg-blue-600 hover:bg-blue-700">
        <Save size={18} className="mr-2" />
        Save Settings
      </Button>
    </div>
  )
}
