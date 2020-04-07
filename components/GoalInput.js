import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={styles.inputElement}
        onChangeText={(text) => setEnteredGoal(text)}
        value={enteredGoal}
      />
      <Button
        title='Add'
        style={styles.addButton}
        onPress={() => onAddGoal(enteredGoal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: '18%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputElement: {
    borderBottomColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginRight: 20,
    padding: 10,
    width: '80%',
  },
});
