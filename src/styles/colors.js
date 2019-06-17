import Color from 'color';

export default {
  white: '#FFF',
  lighter: '#EEE',
  light: '#DDD',
  regular: '#999',
  dark: '#666',
  darker: '#333',
  black: '#000',

  primary: '#222222',
  primaryDark: Color('#222222').darken(0.1),
  secundary: '#80d8f7',
  success: '#9DCA83',
  warn: '#936C3F',
  danger: '#E37A7A',

  transparent: 'transparent',
  darkTransparent: 'rgba(0, 0, 0, 0.6)',
  whiteTransparent: 'rgba(255, 255, 255, 0.3)',
};
