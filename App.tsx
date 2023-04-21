/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import MainScreen from './Views/MainScreen';
import IntroScreen from './Views/IntroScreen';

export default function App() {
  const [isloaded, setIsLoaded] = useState(false)
  setTimeout(() => {
    setIsLoaded(true)

  }, 2000);
  return (
    <View style={styles.container}>
      {isloaded ? <MainScreen /> : <IntroScreen />}
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
