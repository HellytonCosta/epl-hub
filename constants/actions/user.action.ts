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

        // return redirect('');

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
        secure: true, 
      });
    cookies().delete("sessionId");
    /**
     * @TODO perhaps it has to be removed permanently.
     */
    return redirect("/");
    
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateSession = async (sessionAuth?: any) => {
    const sessionId = Number(cookies().get('sessionId')?.value.toString())
    // const sessionAuth = await getServerSession(options);

    // const authSessionToken = cookies().get('next-auth.session-token')
    console.log(sessionId);
    console.log("next auth session: " + sessionAuth)


    /**
     * @TODO 1 - when you call the method, pull both sessions OK 
     * @TODO 2 - If the session is from next auth, return an user.
     * @TODO 3 - If the email from that user is already used, linked the session to the account.
     * @TODO 4 - 
     */

    try {
        // IN CASE OF THE USER IS NOT CREATED ALREADY
        if(sessionAuth){
            const user = await prisma.user.findFirst({
                where: 
                {
                    email: sessionAuth?.user?.email?.toString()
                }
            })
            if(!user){
                const newUser = await prisma.user.create({
                    data: {
                        email: String(sessionAuth.user?.email?.toString()),
                        password: "",
                        username: String(sessionAuth.user?.name),
                    }
                })
                
                const session = await prisma.session.create({
                    data: {
                        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 1000),
                        userId: newUser.id,
                    }
                })
                
                return {newUser , session};
            }

        }

        if(sessionId){

            const session = await prisma.session.findFirst({
                where:    
                {
                    id: sessionId,
                }
            })
    

            const user = await prisma.user.findFirst({
                where: {
                    OR: [
                        {
                            id: session?.userId
                        },
                        {
                            email: sessionAuth?.user?.email?.toString()
                        }
                    ]
                }
            })
            
            return {user, session};
        }

        
    } catch (error) {
        console.error(error);
    }
}

export const validatePage = async () => {

}