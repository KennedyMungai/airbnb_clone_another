import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TabsIndexPage = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<Stack.Screen
				options={{
					header: () => <ExploreHeader />
				}}
			/>
			<Listings />
		</View>
	)
}

export default TabsIndexPage
