import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { View } from 'react-native'

const TabsIndexPage = () => {
	const [category, setCategory] = useState('Tiny Homes')

	const onDataChanged = (category: string) => {
		setCategory(category)
		console.log('CHANGED_', category)
	}

	return (
		<View style={{ flex: 1, backgroundColor: '#fff', marginTop: 80 }}>
			<Stack.Screen
				options={{
					header: () => (
						<ExploreHeader onCategoryChanged={onDataChanged} />
					)
				}}
			/>
			<Listings listings={[]} category={category} />
		</View>
	)
}

export default TabsIndexPage
