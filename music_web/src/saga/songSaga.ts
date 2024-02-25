import { type SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { getSongs, createSong, updateSong, deleteSong,
    getTotalNumberOfSongs, getTotalNumberOfArtists, getTotalNumberOfAlbums,
    getTotalNumberOfGenres, getTotalNumberOfSongsInGenre, getTotalNumberOfSongsAndAlbums,
    getTotalNumberOfSongsInAlbum }
    from '../services/song.api';
import { type Song } from '../types/types';
import {FETCH_SONGS_REQUEST, songActions } from '../slices/songSclice';

// Worker Sagas
export function* onGetSongs(): SagaIterator {
    try {
        const posts: Song[] = yield call(getSongs);
        yield put(songActions.fetchAllSucceeded(posts));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }
}

export function* onCreateSongs(): SagaIterator {
    try {
        const post: Song = yield call(createSong);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onUpdateSongs(id: string) {
    try {
        const post: Song = yield call(updateSong, id);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onDeleteSongs(id: string): SagaIterator {
    try {
        const post: Song = yield call(deleteSong, id);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongs(): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfSongs);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfArtists(): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfArtists);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfAlbums(): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfAlbums);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfGenres(): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfGenres);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsInGenre(): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfSongsInGenre);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsAndAlbums(name: string): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfSongsAndAlbums, name);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

export function* onGetTotalNumberOfSongsInAlbum(id: string): SagaIterator {
    try {
        const post: Song = yield call(getTotalNumberOfSongsInAlbum, id);
        yield put(songActions.fetchSucceeded(post));
    } catch (e: unknown) {
        if (e instanceof Error) {
            yield put(songActions.fetchAllFailure(e.message.toString()));
        }
    }   
}

// Watcher Saga
export function* songsWatcherSaga(): SagaIterator {
    yield takeEvery(FETCH_SONGS_REQUEST, onGetSongs);
}
export function* watchCreateSong() {
    yield takeLatest(songActions.fetchAll.type, onCreateSongs);
}
// export function* WatchUpdateSaga() {
//     yield takeLatest(songActions.fetchAll.type, onUpdateSongs);
// }
// export function* WatchDeleteSaga() {
//     yield takeLatest(songActions.fetchAll.type, deleteSong);
// }
export function* watchGetTotalNumberOfSongs() {
    yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfSongs);
}
export function* watchGetTotalNumberOfAlbums() {
    yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfAlbums);
}
export function* watchGetTotalNumberOfArtists() {
    yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfArtists);
}
export function* watchGetTotalNumberOfGenres() {
    yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfGenres);
}
// export function* watchGetTotalNumberOfSongsAndAlbum() {
//     yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfSongsAndAlbums);
// }
// export function* watchGetTotalNumberOfSongsInAlbum() {
//     yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfSongsInAlbum);
// }
export function* watchGetTotalNumberOfSongsInGenre() {
    yield takeEvery(songActions.fetchAll.type, onGetTotalNumberOfSongsInGenre);
}

export default songsWatcherSaga;