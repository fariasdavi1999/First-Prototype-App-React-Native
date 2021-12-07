import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
} from 'react-native';

import MainStack from './stacks/MainStack'

export default function App() {




  return (
    <NavigationContainer style={styles.container} >
      <MainStack />
    </NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
