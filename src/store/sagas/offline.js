import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { NetInfo } from 'react-native';
import { OFFLINE, ONLINE } from 'redux-offline-queue';

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel((emitter) => {
    NetInfo.isConnected.addEventListener('connectionChange', emitter);

    return () => NetInfo.isConnected.removeEventListener('connectionChange', emitter);
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield put({ type: ONLINE });
      } else {
        yield put({ type: OFFLINE });
      }
    }
  } catch (error) {
    if (__DEV__) {
      console.tron.error('Erro ao verificar conexão!');
      console.tron.error(error);
    }
  } finally {
    channel.close();
  }
}
