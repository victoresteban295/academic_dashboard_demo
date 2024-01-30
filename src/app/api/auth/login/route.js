import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, password} = await request.json();
    const isStudUsername = (username === "demo-student");
    const isStudPassword = (password === "password");
    const isStudent = isStudUsername && isStudPassword;

    const isProfUsername = (username === "demo-professor");
    const isProfPassword = (password === "password");
    const isProfessor = isProfUsername && isProfPassword;

    if(isStudent) {
        let resBody = {
            username: "demo-student",
            role: 'student'
        }
        let res = NextResponse.json(resBody, {status: 200});
        res.cookies.set("username", "demo-student");
        res.cookies.set("role", "STUDENT");
        return res;

    } else if(isProfessor) {
        let resBody = {
            username: "demo-professor",
            role: 'professor'
        }
        let res = NextResponse.json(resBody, {status: 200});
        res.cookies.set("username", "demo-professor");
        res.cookies.set("role", "PROFESSOR");
        return res;

    } else {
        const myOptions = { status: 400, statusText: "BAD REQUEST"}
        return new Response("", myOptions);
    }
}



