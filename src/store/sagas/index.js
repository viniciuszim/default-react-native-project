import { all, takeLatest } from 'redux-saga/effects';

// import { Types as DuckTypes } from '~/store/ducks/duck';
// import { sagaRequest } from './saga';

export default function* rootSaga() {
  return yield all([
    // takeLatest(Types.TYPE, sagaRequest)
  ]);
}
