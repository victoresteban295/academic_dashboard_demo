import { institution } from "@/lib/data/register/institution";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { profile, schoolId } = await request.json();
    const isStudent = (profile === "STUDENT");
    /* const isStudId = (schoolId === "demo-student"); */
    /* const isStudent = isStudProfile && isStudId; */

    const isProfessor = (profile === "PROFESSOR");
    /* const isProfId = (schoolId === "demo-professor"); */
    /* const isProfessor = isProfProfile && isProfId; */
    
    if(isStudent || isProfessor) {
        let resBody = {
            schoolName: institution.schoolName,
            depts: institution.depts,
            majors: institution.majors,
            minors: institution.minors
        }
        let res = NextResponse.json(resBody, {status: 200});
        return res;

    } else {
        const myOptions = { status: 400, statusText: "BAD REQUEST"}
        return new Response("", myOptions);
    }
}
