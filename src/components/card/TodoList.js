import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ToDoList = ({list, press}) => {
  return press ? (
    <View style={styles.containerPress}>
      <Text style={styles.textPress}>{list.title}</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>{list.title}</Text>
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0671B7',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    paddingLeft: 5,
    paddingBottom: 2,
    fontSize: 20,
    color: '#fff',
  },
  containerPress: {
    backgroundColor: '#F8B7CC',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  textPress: {
    fontSize: 20,
    color: '#FFF',
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
});
