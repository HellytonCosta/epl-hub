export interface User {
    id: number,
    username: string,
    email: string,
    name: string,
    favNation: string,
    favTeam: string,
    country: string,
}

export interface Session {
    id: number,
    userId: number,
    expiresAt: string,
    user: User,
}