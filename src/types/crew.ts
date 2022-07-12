export interface IMovieCrew {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

export interface IActorCrew {
    id: number;
    department: string;
    original_language: string;
    episode_count: number;
    job: string;
    overview: string;
    origin_country: string[];
    original_name: string;
    vote_count: number;
    name: string;
    media_type: string;
    popularity: number;
    credit_id: number;
    backdrop_path: string | null;
    first_air_date: string;
    vote_average: number;
    genre_ids: number[];
    poster_path: string | null;
    original_title: string;
    video: boolean;
    title: string;
    adult: boolean;
    release_date: string;
}
