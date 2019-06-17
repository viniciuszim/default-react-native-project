import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import env from '../../env';

if (__DEV__) {
  // controls connection & communication settings
  const tron = Reactotron.configure({ host: env.USER_HOST })
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
