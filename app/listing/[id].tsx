import listingsData from '@/assets/data/airbnb-listings.json'
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ListingDetailsPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()
	const listing = (listingsData as any[]).find((item) => item.id === id)

	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerTitle: id }} />
			<Text>ListingDetailsPage</Text>
		</View>
	)
}

export default ListingDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	}
})