import { configureStore } from '@reduxjs/toolkit'
import likeDislikeReducer from '../Redux/features/LikeDislikeSlice/LikeDislikeSlice'

const store = configureStore({
  reducer: {
    likeDislikes : likeDislikeReducer
  }
})
export default store;