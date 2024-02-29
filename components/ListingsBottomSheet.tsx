import Colors from '@/constants/Colors'
import { Listing } from '@/interfaces/listing'
import BottomSheet from '@gorhom/bottom-sheet'
import React, { useMemo, useRef } from 'react'
import { View } from 'react-native'
import Listings from './Listings'

type Props = {
	listings: Listing[]
	category: string
}

const ListingsBottomSheet = ({ category, listings }: Props) => {
	const bottomSheetRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ['10%', '100%'], [])

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			handleIndicatorStyle={{ backgroundColor: Colors.grey }}
			enablePanDownToClose={false}
			index={1}
		>
			<View style={{ flex: 1 }}>
				<Listings listings={listings} category={category} />
			</View>
		</BottomSheet>
	)
}

export default ListingsBottomSheet
