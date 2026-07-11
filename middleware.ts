import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Ignora temporariamente as validações pesadas de banco/bot para passar no limite de 1MB da Vercel
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
