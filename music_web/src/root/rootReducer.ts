import { type Action, combineReducers } from '@reduxjs/toolkit';
import songReducer from '../slices/songSclice';

const appReducer = combineReducers({
    song: songReducer,
});

const rootReducer = (
    state: any,
    action: Action,
): ReturnType<typeof appReducer> => {
    return appReducer(state, action);
};

export default rootReducer;