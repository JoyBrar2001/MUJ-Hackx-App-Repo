import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, HomeStack, FormScreen } from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={WelcomeScreen} name='Welcome' />
        <Stack.Screen component={LoginScreen} name='Login' />
        <Stack.Screen component={HomeStack} name='HomeStack' />
        <Stack.Screen component={FormScreen} name='Form' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;