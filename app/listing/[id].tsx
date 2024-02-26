import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const ListingDetailsPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()
    console.log(id)

	return (
		<View>
			<Text>ListingDetailsPage</Text>
		</View>
	)
}

export default ListingDetailsPage
