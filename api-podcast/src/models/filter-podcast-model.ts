import { PodcastModel } from "./podcast";

export interface filterPodcastResponse{
    statusCode: number,
    body: PodcastModel[],
}