import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import styles from './styles/ButtonStyle';

const Button = props => {
  return (
    <TouchableHighlight style={styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableHighlight>
  );
};
export default Button;
