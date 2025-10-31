import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ user: null }, { status: 401 })
    }

    const decoded = JSON.parse(Buffer.from(token, "base64").toString())

    return NextResponse.json({
      user: {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      },
    })
  } catch (error) {
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
