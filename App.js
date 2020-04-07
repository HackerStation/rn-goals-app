import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = () => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      {
        key: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.inputElement}
          onChangeText={(text) => setEnteredGoal(text)}
          value={enteredGoal}
        />
        <Button title='Add' style={styles.addButton} onPress={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 30,
    marginTop: 50,
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
  addButton: {
    width: '18%',
  },
  listItem: {
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 0.5,
    marginBottom: 5,
    padding: 10,
  },
});
