"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

const studentChats = [
  { id: 1, name: "Raj Kumar", lastMessage: "Thanks for the guidance!", time: "2 min ago" },
  { id: 2, name: "Priya Sharma", lastMessage: "Can we schedule a mock interview?", time: "1 hour ago" },
  { id: 3, name: "Amit Patel", lastMessage: "I need help with system design", time: "3 hours ago" },
  { id: 4, name: "Neha Singh", lastMessage: "Got the offer from Google!", time: "1 day ago" },
]

const conversationMessages = [
  {
    id: 1,
    sender: "student",
    name: "Raj Kumar",
    text: "Hi Dr. Singh! I have an interview with Microsoft next week.",
    time: "10:30 AM",
  },
  {
    id: 2,
    sender: "mentor",
    name: "You",
    text: "That's great! Would you like to do a mock interview session?",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "student",
    name: "Raj Kumar",
    text: "Yes, that would be really helpful. When are you available?",
    time: "10:40 AM",
  },
  {
    id: 4,
    sender: "mentor",
    name: "You",
    text: "I'm available tomorrow at 3 PM. Let's focus on system design questions.",
    time: "10:42 AM",
  },
  {
    id: 5,
    sender: "student",
    name: "Raj Kumar",
    text: "Perfect! Thanks for the guidance!",
    time: "10:45 AM",
  },
]

export default function MentorMessagesPage() {
  const [selectedStudent, setSelectedStudent] = useState(studentChats[0])
  const [messageText, setMessageText] = useState("")
  const [allMessages, setAllMessages] = useState(conversationMessages)

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setAllMessages([
        ...allMessages,
        {
          id: allMessages.length + 1,
          sender: "mentor",
          name: "You",
          text: messageText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setMessageText("")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Messages</h1>
        <p className="text-slate-400 mt-1">Answer student doubts and provide guidance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[600px]">
        {/* Students List */}
        <div className="lg:col-span-1">
          <Card className="bg-slate-800 border-slate-700 h-full">
            <CardHeader>
              <CardTitle className="text-white text-lg">Students</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 overflow-y-auto">
              {studentChats.map((student) => (
                <button
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedStudent.id === student.id
                      ? "bg-blue-600 text-white"
                      : "bg-slate-700/30 text-slate-300 hover:bg-slate-700/50"
                  }`}
                >
                  <p className="font-medium text-sm">{student.name}</p>
                  <p className="text-xs opacity-75 truncate">{student.lastMessage}</p>
                  <p className="text-xs opacity-50 mt-1">{student.time}</p>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-3">
          <Card className="bg-slate-800 border-slate-700 h-full flex flex-col">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-white">{selectedStudent.name}</CardTitle>
              <CardDescription className="text-slate-400">Student</CardDescription>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto py-4 space-y-4">
              {allMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "mentor" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === "mentor" ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-100"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input */}
            <div className="border-t border-slate-700 p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-500"
                />
                <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
