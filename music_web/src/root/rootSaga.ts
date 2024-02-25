import { all, fork } from 'redux-saga/effects';

import {songsWatcherSaga, watchCreateSong, watchGetTotalNumberOfSongs, watchGetTotalNumberOfAlbums,
        watchGetTotalNumberOfArtists, watchGetTotalNumberOfGenres, watchGetTotalNumberOfSongsInGenre}
         from '../saga/songSaga';

export function* rootSaga(): any {
    yield all([fork(songsWatcherSaga), fork(watchCreateSong), fork(watchGetTotalNumberOfSongs), 
        fork(watchGetTotalNumberOfAlbums), fork(watchGetTotalNumberOfArtists), fork(watchGetTotalNumberOfGenres), 
        fork(watchGetTotalNumberOfSongsInGenre)]);
}

export default rootSaga;