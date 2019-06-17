import { Component } from 'react';

import { Linking, Platform } from 'react-native';

function openExternalApp(url) {
  if (url !== undefined && url !== '') {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          if (url.indexOf('maps') === 0 || url.indexOf('geo') === 0) {
            const urlAux = url.substring(5);
            const latLong = urlAux.substring(urlAux.indexOf('@'));
            const label = urlAux.substring(0, urlAux.indexOf('@'));
            const browserUrl = `https://www.google.de/maps/@${latLong}?q=${label}`;
            return Linking.openURL(browserUrl);
          }
          console.warn(`Can't handle url: ${url}`);
          return null;
        }
        return Linking.openURL(url);
      })
      .catch(err => console.error('An error occurred', err));
  }
}

class LinkingUtil extends Component {
  static handleCallAction = (telefone) => {
    if (telefone !== undefined && telefone !== '') {
      const escapeRE = new RegExp(/([.*+?^= \-!:$(){}|[\]\\/\\])/g);
      openExternalApp(`tel:+55${telefone.replace(escapeRE, '')}`);
    }
  };

  static handleEmailAction = (email, subject) => {
    if (email !== undefined && email !== '') {
      openExternalApp(`mailto:${email}?subject=${subject}&body=`);
    }
  };

  static handleRouteAction = (lat, lng, name) => {
    if (lat !== 0 && lng !== 0) {
      const scheme = Platform.select({ ios: 'maps:', android: 'geo:' });
      const latLng = `${lat},${lng}`;
      const label = name;
      const url = Platform.select({
        ios: `${scheme}?q=${label}@${latLng}`,
        android: `${scheme}?q=${latLng}(${label})`,
      });
      openExternalApp(url);
    }
  };

  static handleSmsAction = (telefone) => {
    if (telefone !== undefined && telefone !== '') {
      const escapeRE = new RegExp(/([.*+?^= \-!:$(){}|[\]\\/\\])/g);
      openExternalApp(`sms:+55${telefone.replace(escapeRE, '')}`);
    }
  };

  static handleWebsiteAction = (website) => {
    if (website !== undefined && (website.includes('http', 0) || website.includes('https', 0))) {
      this.openExternalApp(website);
    }
  };
}

export default LinkingUtil;
