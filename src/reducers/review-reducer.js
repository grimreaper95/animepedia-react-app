import {createSlice} from "@reduxjs/toolkit";
import {findAllReviewsForAnimeThunk, findAllReviewsByUserThunk, createReviewThunk, removeReviewThunk} from "../services/anime-review-thunk";

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviewList: []
    },
    extraReducers: {
        [findAllReviewsForAnimeThunk.fulfilled]: (state, action) => {
            state.reviewList = action.payload;
            console.log( state.reviewList )
        },
        [findAllReviewsByUserThunk.fulfilled]: (state, action) => {
            state.reviewList = action.payload;
        },
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviewList.push(action.payload)
            console.log(action.payload)
        },

        [removeReviewThunk.fulfilled]: (state, { payload }) => {
            console.log(state.reviewList)
            state.reviewList = state.reviewList
                .filter(f => f._id !== payload)
        }
    }

})

export default reviewSlice.reducer