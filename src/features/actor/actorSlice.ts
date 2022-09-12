import { createSlice } from "@reduxjs/toolkit"
import { IActorCast } from "@/types/cast"
import { IProfile } from "@/types/images"

interface ActorState {
    cast: IActorCast[]
    images: IProfile[]
}

const initialState: ActorState = {
    cast: [] as IActorCast[],
    images: [] as IProfile[],
}

/*export const actorSlice = createSlice({
    name: 'actor',
    initialState,
    reducers: {

    }
})*/
