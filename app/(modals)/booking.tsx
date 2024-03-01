import ModalHeaderText from '@/components/ModalHeaderText'
import { Stack } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const BookingModal = () => {
	return (
		<View>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTitle: () => <ModalHeaderText />
				}}
			/>
			<Text>BookingModal</Text>
		</View>
	)
}

export default BookingModal
