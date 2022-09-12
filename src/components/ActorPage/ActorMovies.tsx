import { FC } from "react"
import ActorMoviesList from "./ActorMoviesList"

interface Props {
    movies: any
}

const ActorMovies: FC<Props> = ({ movies }) => {
    return (
        <div>
            <ActorMoviesList movies={movies} title="Known for" />
        </div>
    )
}

export default ActorMovies
