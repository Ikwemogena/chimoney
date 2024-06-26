import { cookies } from "next/headers";
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

    if (!isLoggedIn) {
        if (request.nextUrl.pathname === '/auth/sign-up') {
            return NextResponse.next();
        } else if (!request.nextUrl.pathname.includes('/auth')) {
            return NextResponse.redirect(new URL("/auth/sign-in", request.url));
        }

        if (isLoggedIn && (request.nextUrl.pathname.includes('/auth/sign-in') || request.nextUrl.pathname.includes('/auth/sign-up'))) {
            return NextResponse.redirect(new URL("/", request.url));
        }

        if (isLoggedIn && request.nextUrl.pathname === '/auth/sign-out') {
            return NextResponse.redirect(new URL("/auth/sign-in", request.url));
        }

        return NextResponse.next();
    }
}