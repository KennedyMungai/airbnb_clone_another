import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const categories = [
	{
		name: 'Tiny homes',
		icon: 'home'
	},
	{
		name: 'Cabins',
		icon: 'house-siding'
	},
	{
		name: 'Trending',
		icon: 'local-fire-department'
	},
	{
		name: 'Play',
		icon: 'videogame-asset'
	},
	{
		name: 'City',
		icon: 'apartment'
	},
	{
		name: 'Beachfront',
		icon: 'beach-access'
	},
	{
		name: 'Countryside',
		icon: 'nature-people'
	}
]

const ExploreHeader = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View>
				<View style={styles.container}></View>
			</View>
		</SafeAreaView>
	)
}

export default ExploreHeader

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF'
	}
})
