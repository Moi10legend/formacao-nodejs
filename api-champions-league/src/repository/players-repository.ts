import { PlayersModel } from "../models/players-model";

const database: PlayersModel[] = [
   {id: 1, 
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
        Overall: 93,
        Pace: 88,
        Shooting: 95,
        Passing: 89,
        Dribbling: 85,
        Defending: 45,
        Physical: 90
    }
},
    {id: 2, 
    name: "Lionel Messi",
    club: "Inter Miame",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
        Overall: 92,
        Pace: 87,
        Shooting: 94,
        Passing: 90,
        Dribbling: 88,
        Defending: 35,
        Physical: 85
    }}
]

export const findAllPlayers = async ():Promise<PlayersModel[]> => {
    return database
}

export const findPlayerById = async (id:number):Promise<PlayersModel | undefined> =>{
    return database.find(player => player.id == id);
}

export const insertPlayer = async (player: PlayersModel) => {
    database.push(player)
}

export const deletePlayerRepository = async (id: number) => {
    let index = null;
    database.forEach((currentPlayer, i) => {
        if(currentPlayer.id === id){
            index = i
        }
    }) 

    if(index != null){
        database.splice(index)
        return "Successful"
    }else{
        return "Player not found"
    }
    

}