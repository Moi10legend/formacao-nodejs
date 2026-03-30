import {repositoryPodcast} from "../repositories/podcasts-repository"
import { filterPodcastResponse } from "../models/filter-podcast-model"
import { StatusCodes } from "../utils/status_code"

export const serviceListEpisode = async ():Promise<filterPodcastResponse> =>{
    const data = await repositoryPodcast()

    let responseFormat: filterPodcastResponse = {
            statusCode: data.length !== 0 ? StatusCodes.OK : StatusCodes.NoContent,
            body: data
        }

    return responseFormat;
}