import { defaultStyles } from '@/constants/Styles'
import { Listing } from '@/interfaces/listing'
import { Link } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import {
	FlatList,
	Image,
	ListRenderItem,
	StyleSheet,
	TouchableOpacity,
	View
} from 'react-native'

type Props = {
	listings: any[]
	category: string
}

const Listings = ({ category, listings: items }: Props) => {
	const [loading, setLoading] = useState(false)
	const listRef = useRef<FlatList>(null)

	useEffect(() => {
		console.log('RELOAD LISTINGS', items.length)
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 300)
	}, [category])

	const renderRow: ListRenderItem<Listing> = ({ item }) => {
		return (
			<Link href={`/listing/${item.id}`} asChild>
				<TouchableOpacity>
					<View style={styles.listing}>
						<Image
							source={{ uri: item.medium_url }}
							style={styles.image}
						/>
					</View>
				</TouchableOpacity>
			</Link>
		)
	}

	return (
		<View style={defaultStyles.container}>
			<FlatList
				data={loading ? [] : items}
				ref={listRef}
				renderItem={renderRow}
			/>
		</View>
	)
}

export default Listings

const styles = StyleSheet.create({
	listing: {
		padding: 16
	},
	image: {
		width: '100%',
		height: 300
	}
})
