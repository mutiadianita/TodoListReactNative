import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HeaderSide = ({counter}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Today's to do list: </Text>
      <Text style={styles.header_text2}>{counter}</Text>
    </View>
  );
};

export default HeaderSide;

const styles = StyleSheet.create({
  header_text: {
    color: '#0671B7',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  header_text2: {
    color: '#0671B7',
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 4,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    paddingTop: 40,
  },
});
