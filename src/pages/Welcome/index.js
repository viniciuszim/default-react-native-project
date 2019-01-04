import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, StatusBar, ActivityIndicator, SafeAreaView,
} from 'react-native';

import styles from './styles';

export default class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: false,
    error: false,
  };

  render() {
    const { loading, error } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Bem-vindo</Text>

        {error && <Text style={styles.error}>Error.</Text>}

        {loading && <ActivityIndicator size="small" color="#FFF" />}
      </SafeAreaView>
    );
  }
}
