import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const GoalItem = ({ value }) => {
  return (
    <View style={styles.listItem}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 0.5,
    marginBottom: 5,
    padding: 10,
  },
});
