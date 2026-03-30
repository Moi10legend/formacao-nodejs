import {IncomingMessage, ServerResponse} from "http"
import {serviceListEpisode} from "../services/list-episodes-service"
import {serviceFilterEpisodes} from "../services/filter-episodes-service"
import { filterPodcastResponse } from "../models/filter-podcast-model"

const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    const content:filterPodcastResponse = await serviceListEpisode()

    response.writeHead(content.statusCode, {"content-type": "application/json"})
    response.write(JSON.stringify(content.body))
    response.end()
}

const getFilterList = async (request: IncomingMessage, response: ServerResponse) => {
    const data: filterPodcastResponse = await serviceFilterEpisodes(request.url || "")

    response.writeHead(data.statusCode, {"content-type": "application/json"})
    response.write(JSON.stringify(data.body))
    response.end()
}

export{
    getFilterList,
    getListEpisodes
}