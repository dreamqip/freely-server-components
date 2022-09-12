import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MixedShow } from "@/types/search"

interface RoomState {
    show: MixedShow | null
}

const initialState: RoomState = {
    show: null,
}

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<MixedShow | null>) => {
            state.show = action.payload
        },
    },
})

export const { setShow } = roomSlice.actions

export default roomSlice.reducer
