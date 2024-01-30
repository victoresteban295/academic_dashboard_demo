import { NextResponse } from "next/server"

export async function middleware(request) {

    //If Logged-in Users Attempt to Access Login Page
    //Redirects Them To Dashboard Page
    if(request.nextUrl.pathname === '/') {
        const hasCookies = (request.cookies.has('username')) && (request.cookies.has('role'));
        if(hasCookies) {
            const { value: username } = request.cookies.get('username');
            const { value: cookieRole } = request.cookies.get('role');
            const role = cookieRole.toLowerCase();

            return NextResponse.redirect(`https://academic-dashboard-demo.vercel.app/${role}/${username}`);
        } else {
            return NextResponse.next();
        }
    }

    //If Logged-Off Users Attempt to Access Any Page That Requires Login
    //Redirects Them To Login Page
    const hasCookies = (request.cookies.has('username')) && (request.cookies.has('role'));
    if(!hasCookies) {
        return NextResponse.redirect('https://academic-dashboard-demo.vercel.app/');
    } else {
        return NextResponse.next();
    }
}


export const config = {
    matcher: ['/', '/student/:path*', '/professor/:path*']
}
