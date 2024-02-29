import { defaultStyles } from '@/constants/Styles'
import { Listing } from '@/interfaces/listing'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import {
	FlatList,
	Image,
	ListRenderItem,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'

type Props = {
	listings: any[]
	category: string
	refresh: number
}

const Listings = ({ category, listings: items, refresh }: Props) => {
	const [loading, setLoading] = useState(false)
	const listRef = useRef<FlatList>(null)

	useEffect(() => {
		console.log('REFRESH LISTINGS')
	}, [refresh])

	useEffect(() => {
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
		}, 300)
	}, [category])

	const renderRow: ListRenderItem<Listing> = ({ item }) => {
		return (
			<Link href={`/listing/${item.id}`} asChild>
				<TouchableOpacity>
					<Animated.View
						style={styles.listing}
						entering={FadeInRight}
						exiting={FadeOutLeft}
					>
						<Image
							source={{ uri: item.medium_url }}
							style={styles.image}
						/>
						<TouchableOpacity
							style={{
								position: 'absolute',
								right: 30,
								top: 30,
								zIndex: 20
							}}
						>
							<Ionicons
								name='heart-outline'
								size={30}
								color={'#5D5D5D70'}
							/>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: 'row',
								flex: 1,
								gap: 10,
								justifyContent: 'space-between'
							}}
						>
							<Text style={{ fontFamily: 'mon-sb' }}>
								{item.name}
							</Text>
							<View
								style={{
									flexDirection: 'row',
									flex: 1,
									gap: 4
								}}
							>
								<Ionicons name='star' size={16} />
								<Text>{item.review_scores_rating / 20}</Text>
							</View>
						</View>
						<Text style={{ fontFamily: 'mon' }}>
							{item.room_type}
						</Text>
						<View style={{ flexDirection: 'row', gap: 4 }}>
							<Text style={{ fontFamily: 'mon-sb' }}>
								€ {item.price}
							</Text>
							<Text style={{ fontFamily: 'mon' }}>night</Text>
						</View>
					</Animated.View>
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
		padding: 16,
		gap: 16,
		marginVertical: 16
	},
	image: {
		width: '100%',
		height: 300,
		borderRadius: 10
	}
})
