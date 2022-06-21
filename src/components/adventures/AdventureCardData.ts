import { AdventureCardProps } from "./AdventureCard";

export const adventureCards: Array<AdventureCardProps> = [
    {
        adventureName: 'Lost Contact',
        date: new Date('June 28, 22 14:00'),
        maxPlayers: 4,
        playerCount: 2,
        gameMaster: 'Dong Master',
        length: 4,
        balance: '3/2/4',
        synopsis: 'A trade camp nearby has gone silent, and scouts from town reported a foreboding presence of death and decay in the camp.  2 of the scouts never returned!  Venture out through the woods and investigate what happened at the camp.'
    },
    {
        adventureName: 'Bone Jamz 2022',
        date: new Date('July 4, 22 15:00'),
        maxPlayers: 6,
        playerCount: 0,
        gameMaster: 'Spongebob',
        length: 8,
        balance: '2/1/4',
        synopsis: 'Are there girls there? Because if there are girls there, I want to DOOOOO them.'
    },
]