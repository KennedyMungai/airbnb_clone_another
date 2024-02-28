import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ListingDetailsPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()

	return (
		<View>
            <Stack.Screen options={{headerTitle: id}} />
			<Text>ListingDetailsPage</Text>
		</View>
	)
}

export default ListingDetailsPage
