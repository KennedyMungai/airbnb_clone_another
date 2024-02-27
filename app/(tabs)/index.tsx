import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import { Stack } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TabsIndexPage = () => {
	const onDataChanged = (category: string) => {
		console.log('CHANGED_', category)
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			<Stack.Screen
				options={{
					header: () => (
						<ExploreHeader onCategoryChanged={onDataChanged} />
					)
				}}
			/>
			<Listings />
		</View>
	)
}

export default TabsIndexPage
