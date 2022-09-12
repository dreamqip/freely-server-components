import { IMovie } from "./movie"

interface Images {
    id: number
    backdrops: any
    posters: any
}

export interface MovieProps {
    movie: IMovie
    images?: Images
    comments?: any
}
