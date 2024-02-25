// DUCKS pattern
import {
    createAction,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../root/config.store';
import { type Song } from '../types/types';

export interface SongState {
    data: Song | Song[];
    loading: boolean;
    error: string;
}

const initialState: SongState = {
    data: null || [],
    loading: false,
    error: '',
};

// actionTypes
export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONGS_LOADING_REQUEST = 'FETCH_SONGS_LOADING_REQUEST';
export const FETCH_SONG_REQUEST = 'FETCH_SONG_REQUEST';
export const FETCH_SONGS_SUCCESS = 'FETCH_SONGS_SUCCESS';
export const FETCH_SONGS_FAILURE = 'FETCH_SONGS_FAILURE';

// slice
export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        fetchAllisLoading(state) {
            state.loading = true;
        },
        fetchAllSucceeded(state, action: PayloadAction<Song[]>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.data = action.payload;
            state.loading = false;
        },
        fetchSucceeded(state, action: PayloadAction<Song>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.data = action.payload;
            state.loading = false;
        },
        fetchAllFailure(state, action: PayloadAction<string>) {
            // it's okay to do this here, because immer makes it immutable under the hood😊
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Actions
export const songActions = {
    fetchAll: createAction(`${songSlice.name}`),
    fetchSongsRequest: createAction(FETCH_SONGS_REQUEST),
    fetchAllSucceeded: createAction(FETCH_SONGS_REQUEST, songSlice.actions.fetchAllSucceeded),
    fetchAllisLoading: createAction(FETCH_SONGS_LOADING_REQUEST, songSlice.actions.fetchAllisLoading),
    fetchSucceeded: createAction(FETCH_SONG_REQUEST, songSlice.actions.fetchSucceeded),
    fetchAllFailure: createAction(FETCH_SONGS_FAILURE, songSlice.actions.fetchAllFailure),
};

// Selectors
export const selectSong = (state: RootState): Song | Song[] => state.song.data;

// Reducer
export default songSlice.reducer;