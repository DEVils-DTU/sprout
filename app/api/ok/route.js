import { NextResponse } from "next/server";

// To handle a GET request to /api/ok
export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World inside OK" }, { status: 200 });
}

// To handle a POST request to /api/ok
export async function POST(request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World inside OK" }, { status: 200 });
}