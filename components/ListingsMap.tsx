import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

type Props = {
	listings: any[]
}

const ListingsMap = ({ listings }: Props) => {
	return (
		<View style={styles.container}>
			<MapView style={styles.map} />
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
