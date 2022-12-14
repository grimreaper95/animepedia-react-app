import {createAsyncThunk} from "@reduxjs/toolkit";
import {deleteReviewer, getPendingReviewers, updateReviewer, findReviewer, findApprovedReviewer} from "./reviewer-service";

export const getPendingReviewerThunk = createAsyncThunk(
    'getPendingReviewer',
    async () => await getPendingReviewers()
)

export const updateReviewerThunk = createAsyncThunk(
    'updateReviewer',
    async (reviewer) => await updateReviewer(reviewer)
)

export const deleteReviewerThunk = createAsyncThunk(
    'deleteReviewer',
    async (rId) => await deleteReviewer(rId)
)

export const findReviewerThunk = createAsyncThunk (
    'findReviewer',
    async (rId) => await findReviewer(rId)
)

export const findApprovedReviewerThunk = createAsyncThunk (
    'findReviewer',
    async (username) => await findApprovedReviewer(username)
)