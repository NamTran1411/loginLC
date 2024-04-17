import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.get("IdToken");
  if (token?.value) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/dashboard",
};
