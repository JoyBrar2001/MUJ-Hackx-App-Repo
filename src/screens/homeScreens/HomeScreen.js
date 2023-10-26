import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { PatientData } from '../../constants';

const PatientCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <View className={`flex-row bg-white/20 rounded-xl mb-4 ${index === PatientData.length - 1 ? 'mb-16' : ''}`}>
      <View className='flex justify-center items-center p-4'>
        <FontAwesome name="user-circle-o" size={44} color="white" />
      </View>
      <LinearGradient
        className='h-full w-[1px]'
        colors={["#ffffff00", "#fff", "#ffffff00"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View
        className='py-4 px-2 flex-1'
      >
        <Text className='text-white text-2xl font-medium'>{item.name}</Text>
        <Text className='text-white'>Patient ID : {item.pid}</Text>
        <Text className='text-white'>Age : {item.age} yrs</Text>
        <Text className='text-white'>Gender : {item.gender}</Text>
        <TouchableOpacity
          className='absolute bg-white right-0 bottom-0 p-1 rounded-tl-xl rounded-br-xl'
          onPress={() => setOpen(!open)}
        >
          {open ? (
            <Entypo name="chevron-up" size={32} color="black" />
          ) : (
            <Entypo name="chevron-down" size={32} color="black" />
          )}
        </TouchableOpacity>
        {open ? (
          <>
            <Text className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis numquam minima. Repudiandae incidunt beatae consequuntur modi saepe facere harum, illum earum dolores quia nulla ex molestiae voluptas, dolore laborum nihil assumenda iste corrupti amet deleniti quos, cum error eius fugiat. Sint ab, eligendi exercitationem unde, soluta qui nam asperiores dolorem animi consectetur provident eius totam magnam, laudantium quaerat. Nulla beatae voluptas suscipit mollitia, nam fugit nisi possimus similique odio expedita velit id cumque consequatur adipisci sed iste, et eveniet eaque nemo. Dolorum eius porro ullam amet dicta nostrum commodi mollitia placeat architecto quidem vero ipsa consequatur, aut atque nemo.</Text>
          </>
        ) : null}
      </View>
    </View>
  );
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      className='bg-white flex-1 px-6'
      colors={["#3C5BD9", "#6983EA", "#8C61E6"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <SafeAreaView className='flex-1'>
        <TextInput
          className='bg-white/20 border-white/80 border-[1px] w-full text-xl px-4 py-2 rounded-md mt-6'
          placeholder='Search'
          placeholderTextColor={'white'}
        />
        <ScrollView vertical showsVerticalScrollIndicator={false} className='py-6'>
          {PatientData.map((patient, index) => (
            <PatientCard key={index} index={index} item={patient} />
          ))}
        </ScrollView>
        <TouchableOpacity
          className='bg-white py-4 rounded-full w-full flex-row justify-center fixed bottom-6'
          onPress={() => navigation.navigate('Form')}
        >
          <Text className='text-center text-[#8C62E6] text-xl font-semibold mr-4'>Add Diagnostic</Text>
          <View className='absolute top-[50%] right-4'>
            <AntDesign name="pluscircleo" size={32} color="#8C62E6" className='absolute top-0 left-0' />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen;