import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
		<SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
			<View style={styles.container}>
				<View style={styles.actionRow}>
					<Link href={'/(modals)/booking'} asChild>
						<TouchableOpacity style={styles.searchButton}>
							<Ionicons name='search' size={24} />
							<View>
								<Text style={{ fontFamily: 'mon-sb' }}>
									Where to?
								</Text>
								<Text
									style={{
										fontFamily: 'mon',
										color: Colors.grey
									}}
								>
									Anywhere Any Week
								</Text>
							</View>
						</TouchableOpacity>
					</Link>
					<TouchableOpacity style={styles.filterBtn}>
						<Ionicons name='options-outline' size={24} />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default ExploreHeader

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1,
		height: 130
	},
	actionRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		paddingBottom: 16
	},
	filterBtn: {
		padding: 10,
		borderWidth: 1,
		borderColor: Colors.grey,
		borderRadius: 8
	},
	searchButton: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		width: 200,
		borderColor: '#c2c2c2',
		borderWidth: StyleSheet.hairlineWidth,
		elevation: 2,
		shadowColor: '#000',
		shadowOpacity: 0.12,
		shadowRadius: 8,
		shadowOffset: {
			width: 1,
			height: 1
		}
	}
})
