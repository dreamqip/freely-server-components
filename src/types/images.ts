export interface Images {
    backdrops: Backdrop[]
    logos: Logo[]
    posters: Poster[]
}

export interface Backdrop {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string | null
    vote_average: number
    vote_count: number
    width: number
}

export interface Poster {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string | null
    vote_average: number
    vote_count: number
    width: number
}

export interface Logo {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string | null
    vote_average: number
    vote_count: number
    width: number
}

export interface IProfile {
    aspect_ratio: number
    file_path: string
    height: number
    iso_639_1: string | null
    vote_average: number
    vote_count: number
    width: number
}
