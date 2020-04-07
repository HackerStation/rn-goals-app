import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsMode] = useState(false);

  const addGoalHandler = (goal) => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      {
        key: Math.random().toString(),
        value: goal,
      },
    ]);
    setIsMode(false);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsMode(true)} />
      <GoalInput
        onAddGoal={addGoalHandler}
        onCancelGoal={() => setIsMode(false)}
        visible={isAddMode}
      />
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
