import { IMovieCast } from "./cast"
import { IMovieCrew } from "./crew"

export interface ICredits {
    id: number
    cast: IMovieCast[]
    crew: IMovieCrew[]
}
