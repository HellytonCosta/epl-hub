import prisma from '@/lib/db';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  
  try {
    const { email, username, password } = await req.json();

    const hashedPassword = await hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,

        },
      });
      console.log(user);
      return NextResponse.json(user, { status: 201 })

    } catch (error) {
      console.error(error);
      console.log(error);
      return NextResponse.json({error: "User creation failed" + error }, {status: 500}) 
      
    }

}