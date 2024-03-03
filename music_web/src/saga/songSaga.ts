import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getSongs, createSong, updateSong, deleteSong,
    getTotalNumberOfSongs, getTotalNumberOfArtists, getTotalNumberOfAlbums,
    getTotalNumberOfGenres, getTotalNumberOfSongsInGenre, getTotalNumberOfSongsAndAlbums,
    getTotalNumberOfSongsInAlbum }
    from '../services/song.api';
import { type Song } from '../types/types';
import {ADD_SONG_REQUEST, DELETE_SONG_REQUEST, FETCH_SONGS_REQUEST, FETCH_TOTAL_NUMBER_OF_ALBUM_REQUEST, 
    FETCH_TOTAL_NUMBER_OF_ARTIST_REQUEST, FETCH_TOTAL_NUMBER_OF_GENRE_REQUEST, FETCH_TOTAL_NUMBER_OF_SONGS_AND_ALBUM_REQUEST, 
    FETCH_TOTAL_NUMBER_OF_SONGS_IN_ALBUM_REQUEST, FETCH_TOTAL_NUMBER_OF_SONGS_IN_GENRE_REQUEST, 
    FETCH_TOTAL_NUMBER_OF_SONGS_REQUEST, UPDATE_SONG_REQUEST, songActions } from '../slices/songSclice';

// Worker Sagas
export function* onGetSongs(): SagaIterator {
    try {
        const posts: Song[] = yield call(getSongs);
        yield put(songActions.getSongs(posts));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }
}

export function* onCreateSong(action: any) {
    try {
        console.log("action", action, action.payload)
        const post: Song = yield call(createSong, action.payload);
        yield put(songActions.addSong(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onUpdateSongs(action: any) {
    try {
        const post: Song = yield call(updateSong, action.payload);
        yield put(songActions.addSong(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onDeleteSongs(action: any) {
    try {
        console.log("action-----", action, action.payload)
        const post: Song = yield call(deleteSong, action.payload);
        yield put(songActions.addSong(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongs() {
    try {
        const count: number = yield call(getTotalNumberOfSongs);
        console.log("onGetTotalNumberOfSongs", count)
        yield put(songActions.getTotalNumberOfSongs(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfArtists() {
    try {
        const count: number = yield call(getTotalNumberOfArtists);
        yield put(songActions.getTotalNumberOfArtist(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfAlbums() {
    try {
        const count: number = yield call(getTotalNumberOfAlbums);
        yield put(songActions.getTotalNumberOfAlbum(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfGenres() {
    try {
        const count: number = yield call(getTotalNumberOfGenres);
        yield put(songActions.getTotalNumberOfGenres(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsInGenre() {
    try {
        const count: number = yield call(getTotalNumberOfSongsInGenre);
        console.log("onGetTotalNumberOfSongsInGenre", count)
        yield put(songActions.getTotalNumberOfSongsInGenre(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsAndAlbums() {
    try {
        const count: number = yield call(getTotalNumberOfSongsAndAlbums);
        yield put(songActions.getTotalNumberOfSongsAndAlbums(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsInAlbum() {
    try {
        const count: number = yield call(getTotalNumberOfSongsInAlbum);
        yield put(songActions.getTotalNumberOfSongsInAlbum(count));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.error(e.message.toString()));
        }
    }   
}

// Watcher Saga
export function* songsWatcherSaga(): SagaIterator {
    yield takeEvery(FETCH_SONGS_REQUEST, onGetSongs);
}
export function* watchCreateSong() {
    yield takeLatest(ADD_SONG_REQUEST, onCreateSong);
}
export function* WatchUpdateSaga() {
    yield takeLatest(UPDATE_SONG_REQUEST, onUpdateSongs);
}
export function* WatchDeleteSaga() {
    yield takeLatest(DELETE_SONG_REQUEST, onDeleteSongs);
}
export function* watchGetTotalNumberOfSongs() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_SONGS_REQUEST, onGetTotalNumberOfSongs);
}
export function* watchGetTotalNumberOfAlbums() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_ALBUM_REQUEST, onGetTotalNumberOfAlbums);
}
export function* watchGetTotalNumberOfArtists() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_ARTIST_REQUEST, onGetTotalNumberOfArtists);
}
export function* watchGetTotalNumberOfGenres() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_GENRE_REQUEST, onGetTotalNumberOfGenres);
}
export function* watchGetTotalNumberOfSongsAndAlbum() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_SONGS_AND_ALBUM_REQUEST, onGetTotalNumberOfSongsAndAlbums);
}
export function* watchGetTotalNumberOfSongsInAlbum() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_SONGS_IN_ALBUM_REQUEST, onGetTotalNumberOfSongsInAlbum);
}
export function* watchGetTotalNumberOfSongsInGenre() {
    yield takeEvery(FETCH_TOTAL_NUMBER_OF_SONGS_IN_GENRE_REQUEST, onGetTotalNumberOfSongsInGenre);
}

export default songsWatcherSaga;