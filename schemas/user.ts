import { z } from "zod";

export const userSignUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"]
});

export const userSignInSchema = z.object({
    username: z.string(),
    password: z.string(),
})

export type SignUpValues = z.infer<typeof userSignUpSchema>;
export type SignInValues = z.infer<typeof userSignInSchema>;