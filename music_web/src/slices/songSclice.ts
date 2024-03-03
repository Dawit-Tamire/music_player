// DUCKS pattern
import {
    createAction,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';

import type { RootState } from '../root/config.store';
import { type Song } from '../types/types';

export interface SongState {
    songs: Song[];
    song: any;
    totalNumberOfSongs: any;
    totalNumberOfGenres: any;
    totalNumberOfAlbums: any;
    totalNumberOfArtists: any;
    totalNumberOfSongsAndAlbums: any;
    totalNumberOfSongsInGenre: any;
    totalNumberOfSongsInAlbum: any;
    resStatus: any;
    loading: boolean;
    error: string;
}

const initialState: SongState = {
    songs: [],
    song: null,
    totalNumberOfSongs: {},
    totalNumberOfGenres: {},
    totalNumberOfAlbums: {},
    totalNumberOfArtists: {},
    totalNumberOfSongsAndAlbums: [],
    totalNumberOfSongsInGenre: [],
    totalNumberOfSongsInAlbum: [],
    resStatus: null,
    loading: false,
    error: '',
};

// actionTypes
export const FETCH_SONGS_REQUEST = 'FETCH_SONGS_REQUEST';
export const FETCH_SONG_REQUEST = 'FETCH_SONG_REQUEST';
export const ADD_SONG_REQUEST = 'ADD_SONG_REQUEST';
export const UPDATE_SONG_REQUEST = 'UPDATE_SONG_REQUEST';
export const DELETE_SONG_REQUEST = 'DELETE_SONG_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_SONGS_REQUEST = 'FETCH_TOTAL_NUMBER_OF_SONGS_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_GENRE_REQUEST = 'FETCH_TOTAL_NUMBER_OF_GENRE_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_ALBUM_REQUEST = 'FETCH_TOTAL_NUMBER_OF_ALBUM_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_ARTIST_REQUEST = 'FETCH_TOTAL_NUMBER_OF_ARTIST_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_SONGS_AND_ALBUM_REQUEST = 'FETCH_TOTAL_NUMBER_OF_SONGS_AND_ALBUM_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_SONGS_IN_ALBUM_REQUEST = 'FETCH_TOTAL_NUMBER_OF_SONGS_IN_ALBUM_REQUEST';
export const FETCH_TOTAL_NUMBER_OF_SONGS_IN_GENRE_REQUEST = 'FETCH_TOTAL_NUMBER_OF_SONGS_IN_GENRE_REQUEST';


// slice
export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        isLoading(state) {
            state.loading = true;
        },
        getSongs(state, action: PayloadAction<Song[]>) {
            state.songs = action.payload;
            state.loading = false;
        },
        getTotalNumberOfSongs(state, action: PayloadAction<number>) {
            state.totalNumberOfSongs = action.payload;
            state.loading = false;
        },
        getTotalNumberOfGenres(state, action: PayloadAction<number>) {
            state.totalNumberOfGenres = action.payload;
            state.loading = false;
        },
        getTotalNumberOfAlbum(state, action: PayloadAction<number>) {
            state.totalNumberOfAlbums = action.payload;
            state.loading = false;
        },
        getTotalNumberOfArtist(state, action: PayloadAction<number>) {
            state.totalNumberOfArtists = action.payload;
            state.loading = false;
        },
        getTotalNumberOfSongsAndAlbums(state, action: PayloadAction<number>) {
            state.totalNumberOfSongsAndAlbums = action.payload;
            state.loading = false;
        },
        getTotalNumberOfSongsInGenre(state, action: PayloadAction<number>) {
            state.totalNumberOfSongsInGenre = action.payload;
            state.loading = false;
            console.log("getTotalNumberOfSongsInGenre", state.totalNumberOfSongsInGenre)

        },
        getTotalNumberOfSongsInAlbum(state, action: PayloadAction<number>) {
            state.totalNumberOfSongsInAlbum = action.payload;
            state.loading = false;
        },
        addSong(state, action: PayloadAction<Song>) {
            state.song = action.payload;
            state.loading = false;
        },
        error(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

// Actions
export const songActions = {
    fetchSongsRequest: createAction(FETCH_SONGS_REQUEST),
    addSongRequest: (song: Song) => ({
        type: ADD_SONG_REQUEST,
        payload: song,
    }),
    updateSongRequest: (song: Song) => ({
        type: UPDATE_SONG_REQUEST,
        payload: song,
    }),
    deleteSongRequest: (id: string) => ({
        type: DELETE_SONG_REQUEST,
        payload: id,
    }),
    fetchTotalNumberOfSongsRequest: createAction(FETCH_TOTAL_NUMBER_OF_SONGS_REQUEST),
    fetchTotalNumberOfGenresRequest: createAction(FETCH_TOTAL_NUMBER_OF_GENRE_REQUEST),
    fetchTotalNumberOfAlbumRequest: createAction(FETCH_TOTAL_NUMBER_OF_ALBUM_REQUEST),
    fetchTotalNumberOfArtistRequest: createAction(FETCH_TOTAL_NUMBER_OF_ARTIST_REQUEST),
    fetchTotalNumberOfSongsInAlbumRequest: createAction(FETCH_TOTAL_NUMBER_OF_SONGS_IN_ALBUM_REQUEST), 
    fetchTotalNumberOfSongsAndAlbumRequest: createAction(FETCH_TOTAL_NUMBER_OF_SONGS_AND_ALBUM_REQUEST),
    fetchTotalNumberOfSongsInGenreRequest: createAction(FETCH_TOTAL_NUMBER_OF_SONGS_IN_GENRE_REQUEST),
    getSongs: songSlice.actions.getSongs,
    getTotalNumberOfSongs: songSlice.actions.getTotalNumberOfSongs,
    getTotalNumberOfGenres: songSlice.actions.getTotalNumberOfGenres,
    getTotalNumberOfAlbum: songSlice.actions.getTotalNumberOfAlbum,
    getTotalNumberOfArtist: songSlice.actions.getTotalNumberOfArtist,
    getTotalNumberOfSongsAndAlbums: songSlice.actions.getTotalNumberOfSongsAndAlbums,
    getTotalNumberOfSongsInAlbum: songSlice.actions.getTotalNumberOfSongsInAlbum,
    getTotalNumberOfSongsInGenre: songSlice.actions.getTotalNumberOfSongsInGenre,
    isLoading: songSlice.actions.isLoading,
    addSong: songSlice.actions.addSong,
    error: songSlice.actions.error,
};


// Reducer
export default songSlice.reducer;