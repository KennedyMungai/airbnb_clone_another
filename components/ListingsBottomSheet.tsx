import Colors from '@/constants/Colors'
import { Listing } from '@/interfaces/listing'
import { Ionicons } from '@expo/vector-icons'
import BottomSheet from '@gorhom/bottom-sheet'
import React, { useMemo, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Listings from './Listings'

type Props = {
	listings: Listing[]
	category: string
}

const ListingsBottomSheet = ({ category, listings }: Props) => {
	const bottomSheetRef = useRef<BottomSheet>(null)
	const snapPoints = useMemo(() => ['10%', '100%'], [])

	const showMap = () => {}

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			handleIndicatorStyle={{ backgroundColor: Colors.grey }}
			enablePanDownToClose={false}
			index={1}
			style={styles.sheetContainer}
		>
			<View style={{ flex: 1 }}>
				<Listings listings={listings} category={category} />
				<View style={styles.absoluteButton}>
					<TouchableOpacity onPress={showMap} style={styles.btn}>
						<Text style={{ fontFamily: 'mon-sb', color: 'white' }}>
							Map
						</Text>
						<Ionicons name='map' size={20} color='white' />
					</TouchableOpacity>
				</View>
			</View>
		</BottomSheet>
	)
}

export default ListingsBottomSheet

const styles = StyleSheet.create({
	absoluteButton: {
		position: 'absolute',
		bottom: 30,
		width: '100%',
		alignItems: 'center'
	},
	btn: {
		backgroundColor: Colors.dark,
		padding: 16,
		height: 50,
		alignItems: 'center',
		flexDirection: 'row',
		borderRadius: 30,
		gap: 8
	},
	sheetContainer: {
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 4,
		shadowOffset: {
			width: 1,
			height: 1
		}
	}
})
