import { View, TextInput } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import styles from './styles/SearchScreenStyle';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.searchInput} />
        </View>
        <View style={styles.buttonContainer}>
          <Button>SEARCH</Button>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
