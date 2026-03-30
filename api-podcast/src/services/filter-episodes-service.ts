import { filterPodcastResponse } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCodes } from "../utils/status_code";


export const serviceFilterEpisodes = async (podcastName: string):Promise<filterPodcastResponse> => {
    
    const queryString = podcastName.split("?p=")[1] ?? "" //Pega a query string da Url que é a posição 1 do split

    const data = await repositoryPodcast(queryString);

    let responseFormat: filterPodcastResponse = {
        statusCode: data.length !== 0 ? StatusCodes.OK : StatusCodes.NoContent,
        body: data
    }

    return responseFormat
}