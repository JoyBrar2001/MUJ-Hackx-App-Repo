import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

Entypo.loadFont();

const FormScreen = () => {
  const navigtion = useNavigation();

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <LinearGradient
      className='bg-white flex-1 px-6'
      colors={["#3C5BD9", "#6983EA", "#8C61E6"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <SafeAreaView className='flex-1 pt-4'>
        <View>
          <TouchableOpacity
            className='absolute top-0 left-0 z-50'
            onPress={() => navigtion.goBack()}
          >
            <Entypo name="chevron-left" size={32} color="white" />
          </TouchableOpacity>
          <Text className='text-center text-white text-3xl font-semibold'>Title Here</Text>
        </View>
        <LinearGradient
          className='w-full h-[1px] my-1'
          colors={["#ffffff00", "#fff", "#ffffff00"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
        <View>
          <TextInput
            className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-6 py-2 rounded-md mt-6'
            placeholder='Name'
            placeholderTextColor={'white'}
          />
          <TextInput
            className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-6 py-2 rounded-md mt-6'
            placeholder='Age'
            placeholderTextColor={'white'}
          />
          <TextInput
            className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-6 py-2 rounded-md mt-6'
            placeholder='Gender'
            placeholderTextColor={'white'}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default FormScreen