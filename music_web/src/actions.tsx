// Define action types
export const FETCH_SONG_DATA_REQUEST = 'FETCH_SONG_DATA_REQUEST';
export const FETCH_SONG_DATA_SUCCESS = 'FETCH_SONG_DATA_SUCCESS';
export const FETCH_SONG_DATA_FAILURE = 'FETCH_SONG_DATA_FAILURE';

// Define action creators
export const fetchSongDataRequest = () => ({
  type: FETCH_SONG_DATA_REQUEST
});

export const fetchSongDataSuccess = (data: any) => ({
  type: FETCH_SONG_DATA_SUCCESS,
  payload: data
});

export const fetchSongDataFailure = (error: string) => ({
  type: FETCH_SONG_DATA_FAILURE,
  payload: error
});
