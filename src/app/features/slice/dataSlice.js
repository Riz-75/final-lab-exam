import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        rockets: [],
        missions: []
    },
    reducers: {
        addRockets: (state,action)=>{
            const rocket = {
                id : nanoid(),
                name: action.payload.rocket_name,
                description: action.payload.description,
                image: action.payload.flickr_images
            }
            state.rockets= [...state.rockets, rocket]
        }
    }
})

export const { addRockets} = dataSlice.actions;
export default dataSlice.reducer;