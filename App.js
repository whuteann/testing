import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import tailwind from 'tailwind-rn';
import { useBreakpoints, setBreakpoints} from 'dripsy';
import { theme } from './theme';

setBreakpoints([400, 792, 968, 1200]);

import { DripsyProvider } from '@dripsy/core';
import { View, Text, H1, P } from 'dripsy';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (   
    <DripsyProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DripsyProvider>
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
