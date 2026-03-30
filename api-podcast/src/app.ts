import * as http from "http";
import {getFilterList, getListEpisodes} from "./controllers/podcasts-controller"
import {Routes} from "./routes/routes"
import {HttpMethod} from "./utils/http-methods"


export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0] //"http://localhost:3333/api/"
        
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilterList(request, response)
    }
}