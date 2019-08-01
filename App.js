import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import SearchScreen from './app/screens/SearchScreen';

const App = () => {
  return (
    <Fragment>
      <SearchScreen />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff'
  },
});

export default App;
