import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      className='bg-white flex-1 justify-center items-start px-6'
      colors={["#3C5BD9", "#6983EA", "#8C61E6"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <Text className='text-white text-6xl font-bold'>Welcome!</Text>
      <Text className='text-white text-2xl font-light'>Good to see you!</Text>
      <View className='w-full'>
        <TextInput
          className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-6 py-2 rounded-md mt-6'
          placeholder='Email Address'
          placeholderTextColor={'white'}
        />
        <TextInput
          className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-6 py-2 rounded-md mt-4'
          placeholder='Password'
          placeholderTextColor={'white'}
        />
        <Text className='text-right text-white mt-1'>Forgot Password ?</Text>
      </View>
      <TouchableOpacity 
        className='bg-[#5A61DF] px-24 py-4 mx-auto mt-4 rounded-2xl'
        onPress={() => navigation.navigate('HomeStack')}
      >
        <Text className='font-bold text-2xl text-white'>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default LoginScreen;