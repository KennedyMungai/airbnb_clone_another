import { defaultStyles } from '@/constants/Styles'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

type Props = {
	listings: any[]
}

const ListingsMap = ({ listings }: Props) => {
	return (
		<View style={defaultStyles.container}>
			<MapView
				style={styles.map}
				showsUserLocation
				showsMyLocationButton
			/>
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
