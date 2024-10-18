/**
 * 
 * 
 */
export interface StandingsPosition {
    position: number,
    team: {
        id: number,
        name: string,
        shortName: string,
        tla: string,
        crest: string,
    },
    playedGames: number,
    form: string,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number
}

export interface Standings {
    stage: string,
    type: string,
    group: boolean,
    table: StandingsPosition[],
}


export interface StandingsReponse
    {
        filters: {
            season: string,
        },
        area: {
            id: number,
            name: string,
            code: string,
            flag: string
        },
        competition: {
            id: number,
            name: string,
            code: string,
            type: string,
            emblem: string
        },
        season: {
            id: number,
            startDate: string,
            endDate: string,
            currentMatchday: number,
            winner: boolean,
            stages: [
                string[]
            ]
        },
        standings: Standings[],
    }



// ============= SCORERS =============

export interface Scorer {
    player: {
        id: number,
        name: string,
        firstName: string,
        lastName: string, 
        dateOfBirth: string,
        nationality: string,
        position: string,
        shirtNumber: null,
        lastUpdated: string,
    },
    team: {
        id: number,
        name: string,
        shortName:  string,
        tla:  string,
        crest:  string,
        address:  string,
        website:  string,
        founded: number,
        clubColors:  string,
        venue:  string,
        lastUpdated:  string,
    },
    goals: number,
    assists: number,
    penalties: number,
    playedMatches: number,
}

export interface ScorerRequest {
    count: number,
    filters: {
        season: string,
        limit: string,
    },
    competition: {
        id: number,
        name: string,
        code: string,
        type: string,
        emblem: string,
    },
    season: {
        id: number,
        startDate: string,
        endDate: string,
        currentMatchday: number,
        winner: boolean,
        stages: [
            string[]
        ]
    },
    scorers: Scorer[]
}

// ============= MATCHES =============
export interface Team {
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    coach: {
        id: number,
        name: string,
        nationality: string
    },
    leagueRank: number,
    formation: string,
    lineup: [],
    bench: []
}

export interface Match {
    id: number,
    utcDate: string,
    status: string,
    minute: string,
    injuryTime: number,
    attendance: boolean,
    venue: string,
    matchday: number,
    stage: string,
    group: boolean,
    lastUpdated: string,
    homeTeam: Team,
    awayTeam: Team,
    score: {
        winner: string,
        duration: string,
        fullTime: {
            home: number,
            away: number
        },
        halfTime: {
            home: number,
            away: number
        }
    },
    goals: [
        {
            minute: number,
            injuryTime: boolean,
            type: string,
            team: {
                id: number,
                name: string
            },
            scorer: {
                id: number,
                name: string
            },
            assist: boolean,
            score: {
                home: number,
                away: number
            }
        }[]
    ],
    penalties: [
        {
            player: {
                id: number,
                name: string
            },
            team: {
                id: number,
                name: string
            },
            scored: boolean                
        }[]
    ],
    bookings: [],
    substitutions: [],
    odds: {
        homeWin: number,
        draw: number,
        awayWin: number
    },
    referees: [
        {
            id: number,
            name: string,
            type: string,
            nationality: string
        }[]
    ]
}

export interface CompetitionMatches {
    filters: {
        season: string,
        matchday: string,
    },
    resultSet: {
        count: number,
        first: string,
        last: string,
        played: number,
    },
    competition: {
        id: number,
        name: string,
        code: string,
        type: string,
        emblem: string,
    },
    matches: Match[]
}