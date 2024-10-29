import prisma from "@/lib/db";
import { editProfile, editProfileSchema } from "@/schemas/profile";
import { error } from "console";

export const editProfileAction = async (
    credentials: editProfile,
) => {

    try {

        const { country, email, favTeam, name, username } = editProfileSchema.parse(credentials)
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })
        if (!existingUser) {
            return error("User not found.");
        }

        await prisma.user.update({
            data: {
                country: country,
                favTeam: favTeam,
                name: name,
                username: username
            },
            where: {
                id: existingUser.id
            }
        })

    } catch (error) {
        console.error(error);
    }

}