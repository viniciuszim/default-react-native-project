import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 45,
  },

  headerLeftContainer: {
    marginLeft: metrics.baseMargin + 5,
  },
  iconLeft: {
    fontSize: 24,
    color: colors.white,
  },

  headerCenterContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  headerRightContainer: {
    marginRight: metrics.baseMargin + 5,
  },
  iconRight: {
    fontSize: 24,
    color: colors.white,
  },
});

export default styles;
