import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchState {
    query: string;
    pageIndex: number;
    results: any;
}

const initialState: SearchState = {
    query: '',
    pageIndex: 1,
    results: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setPageIndex: (state, action: PayloadAction<number>) => {
            state.pageIndex = action.payload
        },
        setSearchResults: (state, action: PayloadAction<any>) => {
            state.results = action.payload
        }
    }
})

export const {setSearchQuery, setPageIndex, setSearchResults} = searchSlice.actions

export default searchSlice.reducer
