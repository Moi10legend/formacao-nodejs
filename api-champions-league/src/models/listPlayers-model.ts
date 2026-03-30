import {PlayersModel} from "./players-model"

export interface PlayersList{
    statusCode: number,
    body: PlayersModel[]
}