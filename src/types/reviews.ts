export interface IReviews {
    id: number
    page: number
    results: IReview[]
    total_results: number
    total_pages: number
}

export interface IReview {
    author: string
    content: string
    id: string
    url: string
    created_at: string
    updated_at: string
    author_details: IAuthorDetails
}

export interface IAuthorDetails {
    name: string
    username: string
    avatar_path: string | null
    rating: number
}
