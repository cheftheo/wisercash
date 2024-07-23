import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const username = request.nextUrl.searchParams.get('username');

    if (username) {
        response.cookies.set('username', username, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/'
        });
    }

    return response;
}

export const config = {
    matcher: ['/api/login', '/api/getUserData', 'api/register'], 
}