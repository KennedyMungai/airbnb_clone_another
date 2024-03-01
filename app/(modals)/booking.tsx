import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const BookingModal = () => {
	return (
		<View>
			<Stack.Screen options={{headerTransparent: true}} />
			<Text>BookingModal</Text>
		</View>
	)
}

export default BookingModal
