import { defaultStyles } from '@/constants/Styles'
import { ListingsGeoData } from '@/interfaces/listingGeoData'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

type Props = {
	listings: ListingsGeoData
}

const ListingsMap = ({ listings }: Props) => {
	const onMarkerSelected = (event: any) => {
		console.log(event)
	}

	return (
		<View style={defaultStyles.container}>
			<MapView
				style={StyleSheet.absoluteFill}
				showsUserLocation
				showsMyLocationButton
			>
				{listings.features.map((item, index) => (
					<Marker
						key={index}
						onPress={() => onMarkerSelected(item)}
						coordinate={{
							longitude: +item.properties.longitude,
							latitude: +item.properties.latitude
						}}
					/>
				))}
			</MapView>
		</View>
	)
}

export default ListingsMap
