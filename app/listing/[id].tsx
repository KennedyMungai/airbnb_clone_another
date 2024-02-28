import listingsData from '@/assets/data/airbnb-listings.json'
import { Listing } from '@/interfaces/listing'
import { Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated'

const IMG_HEIGHT = 300
const {width} = Dimensions.get('window')

const ListingDetailsPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>()
	const listing = (listingsData as Listing[]).find((item) => item.id === id)


	return (
		<View style={styles.container}>
			<Stack.Screen options={{ headerTitle: listing!.name, headerTransparent: true }} />
			<Animated.ScrollView>
				<Animated.Image
					source={{ uri: listing?.xl_picture_url }}
					style={styles.image}
					entering={FadeInUp}
					exiting={FadeInDown}
				/>
			</Animated.ScrollView>
		</View>
	)
}

export default ListingDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	image: {
		height: IMG_HEIGHT,
		width,
	}
})
