import { NextResponse } from "next/server";

export async function GET() {

    try {
        const response = await fetch(`https://api.football-data.org/v4/competitions/PL/scorers`, {
            method: "GET",
            headers: {
                'x-auth-token': 'f66c03af1ad643e0bc10ad9610310bbc',
            }
        });
        
        if (!response.ok) {
            return NextResponse.json({message: "Failed to get information: "}, {status: 500});
        }
        
        const data = await response.json();
        
        return NextResponse.json({message: "Information retrieved successfully! ", response: data }, {status: 200})
        } catch (error) {
            console.error("Internal server error", error);
        }
}