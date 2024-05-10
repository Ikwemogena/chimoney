import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

export function middleware(request: NextRequest) {

    const isLoggedIn = request.cookies.get('accessToken')

    if (!isLoggedIn && !request.nextUrl.pathname.includes('/auth')) {
        return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }

    if (isLoggedIn && request.nextUrl.pathname.includes('/auth')) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next();
}