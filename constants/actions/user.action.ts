"use server";
import prisma from "@/lib/db";
import { SignInValues, SignUpValues, userSignInSchema, userSignUpSchema } from "@/schemas/user";
import { hash } from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async (
    credentials: SignUpValues,
  ) => {

    try {        
        const { email, password, username} = userSignUpSchema.parse(credentials);
        const passwordHashed = await hash(password, 10);

        const existingUsername = await prisma.user.findFirst({
            where: {
                username: username,
            }
        });
        if(existingUsername){
            return {
                error: "Username already in use, please choose another.",
            }
        }

        const existingEmail = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })
        if(existingEmail){
            return {
                error: "Email already in use, please choose another.",
            }
        }

        const user = await prisma.user.create({
            data: {
                username: username,
                email: email,
                password: passwordHashed,
            }
        })

        const session = await prisma.session.create({
            data: {
                userId: user?.id,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 1000),
            }
        })
        
        const maxAge = 60 * 60 * 24;
        cookies().set('sessionId', session.id.toString(), {
            maxAge, 
            path: '/',
            httpOnly: true,
            secure: true, 
        });

        return redirect('');
        
    } catch (error) {
        console.error(error)
    }
}

export const signIn = async ( 
    credentials: SignInValues
) => {

    try {
        
        const { password, username} = userSignInSchema.parse(credentials);

        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    // { email },
                    { username }
                ]
            }
        })
        if(!existingUser || !existingUser.password)
            return { error: "Incorrect username or password"}

        // const invalidPassword = await compare(existingUser.password, password);
        if(existingUser.password !== password)
            return { error: "Incorrect password"}

        const session = await prisma.session.create({
            data: {
                userId: existingUser?.id,
                expiresAt: new Date(Date.now() + 30 * 24 * 60 * 1000),
            }
        })

        const maxAge = 60 * 60 * 24;
        cookies().set('sessionId', session.id.toString(), {
            maxAge, 
            path: '/',
            httpOnly: true,
            // secure: true, 
          });

        return redirect('');

    } catch (error) {
        console.error(error);   
    }
}

export const SignOut = async () => {
    const maxAge = 60 * 60 * 24;
    cookies().set('sessionId', "0", {
        maxAge, 
        path: '/',
        httpOnly: true,
        // secure: true, 
      });

    return redirect("/");
}

export const validateRequest = async () => {
    const oldCookies = cookies().get('sessionId')
    const userId: number = Number(oldCookies?.value.toString());
    
    try {
        if(userId){

            const session = await prisma.session.findFirst({
                where: {
                    id: userId,
                }
            })
            
            const user = await prisma.user.findFirst({
                where: {
                    id: session?.userId
                }
            })
            
            return user;
        }
        
    } catch (error) {
        console.error(error);
    }
}