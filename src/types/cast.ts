export interface IMovieCast {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

export interface IActorCast {
    id: number;
    original_language: string;
    episode_count: number;
    overview: string;
    origin_country: string[];
    original_name: string;
    genre_ids: number[];
    name: string;
    media_type: string;
    poster_path: string | null;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    character: string;
    backdrop_path: string | null;
    popularity: number;
    credit_id: number;
    original_title: string;
    video: boolean;
    release_date: string;
    title: string;
    adult: boolean;
}
