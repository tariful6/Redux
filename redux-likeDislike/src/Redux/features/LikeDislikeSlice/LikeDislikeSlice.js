import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    likes: 0,
    dislikes: 0
}


const likeDislikeSlice = createSlice({
    name : 'likeDislikes',
    initialState: initialState,
    reducers: {
        increaseLike: (state) => {
           state.likes += 1
        },
        increaseDislike: (state) => {
            state.dislikes += 1
        },
        resets : (state) => {
            state.likes = 0;
            state.dislikes = 0;
        }
    },
})

export const {increaseLike, increaseDislike, resets} = likeDislikeSlice.actions;

export default likeDislikeSlice.reducer