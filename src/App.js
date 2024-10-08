/* eslint-disable no-unused-vars */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './navigation';

/*
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);
*/

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
}); 

export default App;
