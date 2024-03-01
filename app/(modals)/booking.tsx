import ModalHeaderText from '@/components/ModalHeaderText'
import { BlurView } from 'expo-blur'
import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'

const BookingModal = () => {
	return (
		<BlurView style={styles.container} intensity={70} tint={'light'}>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTitle: () => <ModalHeaderText />
				}}
			/>
			<Text>BookingModal</Text>
		</BlurView>
	)
}

export default BookingModal

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
