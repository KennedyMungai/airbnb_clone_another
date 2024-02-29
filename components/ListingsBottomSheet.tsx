import { View, Text } from 'react-native'
import React from 'react'
import { Listing } from '@/interfaces/listing'

type Props = {
	listings: Listing[]
	category: string
}

const ListingsBottomSheet = ({ category, listings }: Props) => {
	return (
		<View>
			<Text>ListingsBottomSheet</Text>
		</View>
	)
}

export default ListingsBottomSheet
