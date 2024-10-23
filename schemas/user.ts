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