import ListingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
import listingsData from '@/assets/data/airbnb-listings.json'
import ExploreHeader from '@/components/ExploreHeader'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'
import ListingsMap from '@/components/ListingsMap'
import { Stack } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

const TabsIndexPage = () => {
	const [category, setCategory] = useState('Tiny Homes')
	const items = useMemo(() => listingsData as any, [])
	const geoDataItems = useMemo(() => ListingsDataGeo as any, [])

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
			{/* <Listings listings={items} category={category} /> */}
			<ListingsMap listings={geoDataItems} />
			<ListingsBottomSheet listings={items} category={category} />
		</View>
	)
}

export default TabsIndexPage
