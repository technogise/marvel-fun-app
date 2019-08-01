import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View>
          <Text>React Native Work shop</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff'
  },
});

export default SearchScreen;
