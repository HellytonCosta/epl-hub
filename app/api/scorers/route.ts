import { NextResponse } from "next/server";

const apiKey = process.env.FOOTBALL_API_KEY!;
const apiUrl = process.env.FOOTBALL_API_BASE_URL!;

export async function GET() {

    if (!apiKey) {
        return NextResponse.json(
            { message: "API key is missing." },
            { status: 500 }
        );
    }
    
    try {
        const response = await fetch(`${apiUrl}/scorers`, {
            method: "GET",
            headers: {
                'x-auth-token': apiKey,
            }
        });

        if (!response.ok) {
            return NextResponse.json({ message: "Failed to get information: " }, { status: 500 });
        }

        const data = await response.json();

        return NextResponse.json({ message: "Information retrieved successfully! ", response: data }, { status: 200 })
    } catch (error) {
        console.error("Internal server error", error);
    }
}