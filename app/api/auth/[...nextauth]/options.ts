import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password"
                },
            },
            async authorize(credentials) {
                const user = { id: "42", name: "Leko", password: "nextauth" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
       signIn: "/signIn",
       signOut: "/profile",
    }
}