import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // Static credentials from env
  const validEmail = process.env.LOGIN_EMAIL;
  const validPassword = process.env.LOGIN_PASSWORD;
  if (email === validEmail && password === validPassword) {
    // Set a cookie for session (simple example)
    return NextResponse.json({ success: true }, {
      headers: {
        "Set-Cookie": `auth=true; Path=/; HttpOnly; SameSite=Lax`,
      },
    });
  }
  return NextResponse.json({ success: false });
}
