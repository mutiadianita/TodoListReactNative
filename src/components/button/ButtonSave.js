import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';

const ButtonArea = ({todo, setTodo}) => {
  const [todoValue, setTodoValue] = useState('');
  const [color, setColor] = useState('#808080');

  const Separator = () => <View style={styles.separator} />;

  const handleSubmit = item => {
    if (item === '') {
      return Alert.alert('Please fill what to do today');
    } else if (todo.some(todoItem => todoItem.title === item)) {
      return Alert.alert('Activity already exists');
    } else {
      const newTodo = {
        id: new Date().getTime().toString(),
        title: todoValue,
        pressed: false,
      };
      setTodo([...todo, newTodo]);
      setTodoValue('');
      setColor('#808080');
    }
  };

  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Input what to do today"
        style={styles.text_input}
        value={todoValue}
        onChangeText={setTodoValue}
      />
      <Separator />
      <View style={styles.button}>
        <Button
          title="ADD"
          color="#0671B7"
          onPress={() => handleSubmit(todoValue)}
        />
      </View>
    </View>
  );
};

export default ButtonArea;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    margin: 7,
    backgroundColor: '#81C4E4',
    borderColor: '#81C4E4',
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    padding: 18,
    borderRadius: 16,
  },
  text_input: {
    paddingBottom: 5,
    paddingTop: 9,
    paddingLeft: 20,
  },
  separator: {
    marginVertical: 2,
    marginHorizontal: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
