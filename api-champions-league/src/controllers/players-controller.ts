import {request, Request, Response} from "express"
import { getPlayerByIdService, getPlayerService, postPlayerService } from "../services/players-service"

export const getPlayer = async (request: Request, response: Response)=> {
    
    const data = await getPlayerService()

    response.status(data.statusCode).json(data.body)  

    //response.send("Hello world") //printando uma mensagem na tela
}

export const getPlayerById = async (request: Request, response: Response) => {
    const id = parseInt(Array.isArray(request.params.id) ? request.params.id[0] : request.params.id)
    const data = await  getPlayerByIdService(id)

    response.status(data.statusCode).json(data.body)
}

export const postPlayer = async(request: Request, response: Response) => {
    const bodyValue = request.body
    const httpResponse = await postPlayerService(bodyValue)

    if(httpResponse){
        response.status(httpResponse.statusCode).json(httpResponse.body)
    }
}