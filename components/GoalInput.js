import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

export const GoalInput = ({ onAddGoal, onCancelGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.inputElement}
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
        />
        <View style={styles.buttonGroup}>
          <View style={styles.addButton}>
            <Button
              title='Add'
              onPress={() => {
                onAddGoal(enteredGoal);
                setEnteredGoal('');
              }}
            />
          </View>
          <View style={styles.cancelButton}>
            <Button title='CANCEL' color='red' onPress={onCancelGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addButton: {
    marginRight: 5,
    minWidth: '20%',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    width: '80%',
  },
  cancelButton: {
    minWidth: '20%',
  },
  inputContainer: {
    display: 'flex',
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
