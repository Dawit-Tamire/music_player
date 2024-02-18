import { configureStore, ThunkAction, Action, createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from '../reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

sagaMiddleware.run(rootSaga)


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

