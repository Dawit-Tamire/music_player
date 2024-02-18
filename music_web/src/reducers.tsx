// Import necessary dependencies
import { combineReducers } from 'redux';
import { 
  FETCH_SONG_DATA_REQUEST, 
  FETCH_SONG_DATA_SUCCESS, 
  FETCH_SONG_DATA_FAILURE 
} from './actions';
import { RootState } from './app/store'; // Assuming RootState is defined in types file


// Define initial state type
interface SongDataState {
  songs: any[]; // Adjust 'any[]' to match the actual type of your songs
  loading: boolean;
  error: string | null;
}

// Define initial state
const initialState: SongDataState = {
  songs: [],
  loading: false,
  error: null
};

// Define reducer function
const songDataReducer = (state = initialState, action: any): SongDataState => {
  switch (action.type) {
    case FETCH_SONG_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SONG_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: action.payload,
        error: null
      };
    case FETCH_SONG_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  songData: songDataReducer,
  // Add other reducers here if needed
});

export default rootReducer;
