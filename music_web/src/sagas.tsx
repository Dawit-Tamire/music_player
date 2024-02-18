// Import necessary dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { FETCH_SONG_DATA_REQUEST, fetchSongDataSuccess, fetchSongDataFailure } from './actions';

// Define function to fetch song data from API
function* fetchSongDataSaga() {
  try {
    // Make API call to fetch song data
    const response: AxiosResponse = yield call(axios.post, 'http://localhost:5000/song/'); // Assuming the API endpoint is '/api/songs'
    
    // Dispatch success action with the received data
    yield put(fetchSongDataSuccess(response.data));
  } catch (error: any) {
    // Dispatch failure action if request fails
    yield put(fetchSongDataFailure(error.message));
  }
}

// Watch for FETCH_SONG_DATA_REQUEST action
export default function* watchFetchSongData() {
  yield takeLatest(FETCH_SONG_DATA_REQUEST, fetchSongDataSaga);
}
