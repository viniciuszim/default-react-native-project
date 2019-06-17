import { all, spawn, takeLatest } from 'redux-saga/effects';

import { startWatchingNetworkConnectivity } from './offline';

import { Types as FavoriteTypes } from '~/store/ducks/favorites';
import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  return yield all([
    spawn(startWatchingNetworkConnectivity),
  	takeLatest(FavoriteTypes.ADD_REQUEST, addFavoriteRequest)
  ]);
}
