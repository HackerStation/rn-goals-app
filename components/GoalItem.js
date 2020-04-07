import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const GoalItem = ({ onDelete, value }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
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
