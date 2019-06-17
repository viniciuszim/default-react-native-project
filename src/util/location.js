import {
  Platform, PermissionsAndroid, NativeModules, Linking, Alert,
} from 'react-native';

import Geocode from 'react-geocode';

import stringsUtil from '~/util/strings';

class Location {
  static checkPermissions = async (parentFunction) => {
    try {
      if (Platform.OS === 'ios') {
        this.requestPermissions(parentFunction);
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Localização',
            message: 'Permitir acesso a sua localização para salvar os registros',
            buttonNeutral: 'Pergunte depois',
            buttonNegative: 'Continuar não permitindo',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.requestPermissions(parentFunction);
        } else {
          this.showAlert();
        }
      }
    } catch (err) {
      console.error(`An error occurred at checkPermissions -> ${err}`);
    }
  };

  static requestPermissions = async (parentFunction) => {
    try {
      navigator.geolocation.getCurrentPosition(
        (response) => {
          // set Google Maps Geocoding API for purposes of quota management.
          Geocode.setApiKey(stringsUtil.keys.geocode);

          // Enable or disable logs. Its optional.
          Geocode.enableDebug();

          parentFunction(response.coords);
        },
        (error) => {
          if (error.PERMISSION_DENIED === 1) {
            this.showAlert();
          }
        },
      );
    } catch (err) {
      console.error(`An error occurred at requestPermissions -> ${err}`);
    }
  };

  static showAlert = () => {
    Alert.alert(
      'Localização',
      'Permitir acesso a sua localização para salvar os registros',
      [
        {
          text: 'Pergunte depois',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Continuar não permitindo',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Permitir',
          onPress: () => this.openAppSettings(),
        },
      ],
      {
        cancelable: false,
      },
    );
  };

  static openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      const { RNAndroidOpenSettings } = NativeModules;
      RNAndroidOpenSettings.appDetailsSettings();
    }
  };
}

export default Location;
