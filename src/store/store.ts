import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/UserSlice"
import tokenSlice from "../reducers/TokenSlice"
import playlistSlice from "../reducers/PlaylistSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenSlice,
        playlist: playlistSlice,
    }
})