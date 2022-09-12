import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ISearch } from "@/types/search"

interface SearchState {
    query: string
    results: ISearch | null
}

const initialState: SearchState = {
    query: "a",
    results: null,
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setSearchResults: (state, action: PayloadAction<ISearch>) => {
            state.results = action.payload
        },
    },
})

export const { setSearchQuery, setSearchResults } = searchSlice.actions

export default searchSlice.reducer
