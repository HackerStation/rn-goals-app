import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState(
    'Open up App.js to start working on your app!!!'
  );
  return (
    <View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
