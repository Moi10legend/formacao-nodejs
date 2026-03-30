import { deletePlayerRepository } from "../repository/players-repository";
import { PlayersList } from "../models/listPlayers-model"
import { PlayersModel } from "../models/players-model";
import { findAllPlayers, findPlayerById, insertPlayer } from "../repository/players-repository";
import { StatusCodes } from "../utils/status-codes"

export const getPlayerService = async (): Promise<PlayersList> =>{

    const data = await findAllPlayers();
    let statusCode = data.length != 0 ? StatusCodes.ok : StatusCodes.noContent
    return {statusCode: statusCode, body: data}
}

export const getPlayerByIdService = async(id: number): Promise<{statusCode: number, body: PlayersModel | undefined}> => {
    const data = await findPlayerById(id)
    let statusCode = data ? StatusCodes.ok : StatusCodes.noContent

    return {statusCode: statusCode, body: data}
}

export const postPlayerService = async(player: PlayersModel) =>{
    
    if(Object.keys(player).length != 0){
        await insertPlayer(player)
        return {statusCode: StatusCodes.created, body: {message: "Successful!"}}
    }else{
        return {statusCode: StatusCodes.badRequest, body: player}
    }
}

export const deletePlayerByIdService = async(id: number) => {
    const response = await deletePlayerRepository(id)

    if(response == "Successful"){
        return {statusCode: StatusCodes.ok, body: {message: response}}
    }else{
        return {statusCode: StatusCodes.badRequest, body: {message: response}}
    }
}