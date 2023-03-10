import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/:path*"],
};

/** @param {import("next/server").NextRequest} req */
export async function middleware(req) {
  if (req.nextUrl.pathname === "/middleware-protected") {
    const session = await getToken({
      req,
      secret: process.env.SECRET,
      secureCookie:
        process.env.NEXTAUTH_URL?.startsWith("https://") ??
        !!process.env.VERCEL_URL,
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    console.log(session)
    if (!session) return NextResponse.redirect("/api/auth/signin");
    // If user is authenticated, continue.
  }
}
