import { Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homeScreens/HomeScreen';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import ProfileScreen from './homeScreens/ProfileScreen';

Feather.loadFont();
FontAwesome.loadFont();
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const HelpUI = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  )
}

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor: '#A084EC',
          paddingVertical: 0,
          height: 64,
        },
        tabBarActiveTintColor : 'white',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)'
      }}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{ 
          headerShown: false, 
          tabBarShowLabel: false, 
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='Help' 
        component={HelpUI} 
        options={{ 
          headerShown: false, 
          tabBarShowLabel: false, 
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-help-circle" size={32} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name='Profile' 
        component={ProfileScreen} 
        options={{ 
          headerShown: false, 
          tabBarShowLabel: false, 
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={32} color={color} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}

export default HomeStack;