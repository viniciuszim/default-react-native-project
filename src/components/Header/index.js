import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import Image from 'react-native-remote-svg';

import styles from './styles';

import IconBadge from 'react-native-icon-badge';
import Icon from 'react-native-vector-icons/FontAwesome';

// import LogoInterna from '~/../public/images/logo-interna.png';

const MenuLeftIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Icon
      name="bars"
      size={styles.iconLeft.fontSize}
      color={styles.iconLeft.color}
    />
  </TouchableOpacity>
);

const MenuRightIcon = ({ navigation }) => (
  <IconBadge
    MainElement={(
      <Icon
        onPress={() => {}}
        name="user"
        size={styles.iconLeft.fontSize}
        color={styles.iconLeft.color}
      />
)}
    BadgeElement={<Text style={styles.textBadge}>99</Text>}
    IconBadgeStyle={styles.iconBadge}
    Hidden={99 === 0}
  />
);

const ViewWithLogo = () => (
  <View style={styles.headerCenterContainer}>
    {/* <Image
      source={LogoInterna}
      style={styles.imageLogo}
    /> */}
  </View>
);

const ViewWithLogoAndTitle = ({ title }) => (
  <View style={styles.headerCenterContainer}>
    {/* <Image
      source={LogoInterna}
      style={styles.imageLogoWithTitle}
    /> */}
    <Text style={styles.textTitle}>{title}</Text>
  </View>
);

const headerWithLogo = (props) => {
  const { navigation } = props;
  const title = navigation.getParam('titleParam');
  return ({
    headerTitle: (title !== undefined && title !== null && title !== '') ? (
      <ViewWithLogoAndTitle title={title} />
    ) : (
      <ViewWithLogo />
    ),
    headerTintColor: 'white',
    headerStyle: styles.header,
    headerLeft: <MenuLeftIcon {...props} />,
    headerLeftContainerStyle: styles.headerLeftContainer,
    // headerRight: <MenuRightIcon {...props} />,
    headerRightContainerStyle: styles.headerRightContainer,
    headerBackTitle: null,
  });
};

const headerWithBackButton = (props) => {
  const { navigation } = props;
  const title = navigation.getParam('titleParam');
  return ({
    headerTitle: (title !== undefined && title !== null && title !== '') ? (
      <ViewWithLogoAndTitle title={title} />
    ) : (
      <ViewWithLogo />
    ),
    headerTintColor: 'white',
    headerStyle: styles.header,
  });
};

export default {
  headerWithLogo,
  headerWithBackButton,
};
