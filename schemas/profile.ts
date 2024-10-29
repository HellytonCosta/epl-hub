import { z } from "zod";

export const editProfileSchema = z.object({
    country: z.string(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    nation: z.string(),
    favTeam: z.string(),
});

export type editProfile = z.infer<typeof editProfileSchema>;