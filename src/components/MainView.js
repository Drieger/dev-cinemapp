import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import * as Expo from 'expo';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2923',
  },
});

const MainView = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

MainView.propTypes = {
  children: PropTypes.node,
};

MainView.defaultProps = {
  children: null,
};

export default MainView;
