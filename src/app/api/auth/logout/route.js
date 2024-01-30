import { cookies } from "next/dist/client/components/headers";

export async function POST(request) {
    cookies().delete('username');
    cookies().delete('role');

    const myOptions = { status: 200, statusText: "OK"}

    return new Response("", myOptions);
} 
