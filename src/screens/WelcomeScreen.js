import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

AntDesign.loadFont();

const WelcomeScreen = () => {
	const navigation = useNavigation();

	return (
		<LinearGradient
			className='bg-white flex-1 gap-4 justify-center items-center'
			colors={["#3C5BD9", "#6983EA", "#8C61E6"]}
			start={{ x: 0.5, y: 0 }}
			end={{ x: 0.5, y: 1 }}
		>
			<Text className='text-white font-bold text-5xl my-16'>Derma AI</Text>
			<View className='flex justify-center items-center my-16'>
				<View
					style={{
						backgroundColor: "#fff",
						opacity: 0.2,
						height: width * 0.7,
						width: width * 0.7,
						position: 'absolute',
						borderRadius: width * 0.5,
					}}
				/>
				<View
					style={{
						backgroundColor: "#fff",
						opacity: 0.2,
						height: width * 0.55,
						width: width * 0.55,
						position: 'absolute',
						borderRadius: width * 0.5,
					}}
				/>
				<Image
					source={require('../../assets/H-LOGO.png')}
					style={{
						height: width * 0.4,
						width: width * 0.4,
					}}
				/>
			</View>
			<Text className='text-white font-semibold text-lg'>Tagline comes here</Text>
			<TouchableOpacity 
				className='bg-white rounded-full p-4'
				onPress={() => navigation.navigate('Login')}
			>
				<AntDesign name="right" size={24} color="#8C61E6" />
			</TouchableOpacity>
		</LinearGradient>
	);
}

export default WelcomeScreen;