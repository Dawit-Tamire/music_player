import { all, fork } from 'redux-saga/effects';

import {songsWatcherSaga, watchCreateSong, watchGetTotalNumberOfSongs, watchGetTotalNumberOfAlbums,
        watchGetTotalNumberOfArtists, watchGetTotalNumberOfGenres, watchGetTotalNumberOfSongsInGenre, WatchUpdateSaga,
        WatchDeleteSaga, watchGetTotalNumberOfSongsAndAlbum, watchGetTotalNumberOfSongsInAlbum}
         from '../saga/songSaga';

export function* rootSaga(): any {
    yield all([fork(songsWatcherSaga), fork(watchCreateSong), fork(WatchUpdateSaga),
        fork(WatchDeleteSaga), fork(watchGetTotalNumberOfSongs), 
        fork(watchGetTotalNumberOfAlbums), fork(watchGetTotalNumberOfArtists), 
        fork(watchGetTotalNumberOfGenres), fork(watchGetTotalNumberOfSongsInGenre), 
        fork(watchGetTotalNumberOfSongsAndAlbum), fork(watchGetTotalNumberOfSongsInAlbum)]);
}

export default rootSaga;