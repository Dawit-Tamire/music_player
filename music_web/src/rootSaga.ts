import { all } from 'redux-saga/effects';
import songDataSaga from './sagas';

export default function* rootSaga() {
  yield all([
    songDataSaga(),
    // other sagas if you have any
  ]);
}
