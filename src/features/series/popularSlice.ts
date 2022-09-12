import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITvShow } from "@/types/series"

interface InitialState {
    series: ITvShow[]
    page: number
    totalPages: number
}

const initialState: InitialState = {
    series: [],
    page: 1,
    totalPages: 100,
}

export const popularSlice = createSlice({
    name: "popularSeries",
    initialState,
    reducers: {
        setPopularSeries: (state, action: PayloadAction<ITvShow[]>) => {
            state.series.push(...action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.totalPages = action.payload
        },
        reset: (state) => {
            state.series = []
            state.page = 1
            state.totalPages = 100
        },
    },
})

export const { setPopularSeries, setPage, setTotalPages, reset } =
    popularSlice.actions

export default popularSlice.reducer
