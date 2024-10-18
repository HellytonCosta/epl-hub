import {axiosInstance} from "@/services/axiosInstance";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const matchday = searchParams.get('matchday');
  try {
    const response = await axiosInstance.get(`/matches`, {
        params: { matchday }
    });
    
    const data = NextResponse.json(response.data)
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    
  }
}
