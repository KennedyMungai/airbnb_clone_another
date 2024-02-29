import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { defaultStyles } from '@/constants/Styles'

type Props = {
	listings: any[]
}

const ListingsMap = ({ listings }: Props) => {
	return (
		<View style={defaultStyles.container}>
			<MapView style={styles.map} showsUserLocation showsMyLocationButton />
		</View>
	)
}

export default ListingsMap

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		width: '100%',
		height: '100%'
	}
})
