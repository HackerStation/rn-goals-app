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
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      {
        key: Math.random().toString(),
        value: goal,
      },
    ]);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            value={itemData.item.value}
            onDelete={() => deleteGoalHandler(itemData.item.key)}
          />
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
});
