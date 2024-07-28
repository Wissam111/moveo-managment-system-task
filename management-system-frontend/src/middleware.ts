import { NextResponse, NextRequest } from "next/server";
import {
  setCookie,
  getCookie,
  getCookies,
  deleteCookie,
  hasCookie,
} from "cookies-next";
export function middleware(req: NextRequest): NextResponse {
  const res = NextResponse.next();
  const accessToken = getCookies({ res, req });
  const protectedRoutes = ["/dashboard", "/profile", "/projects"];

  if (
    protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) &&
    !accessToken
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}
