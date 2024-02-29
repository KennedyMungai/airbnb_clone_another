import { defaultStyles } from '@/constants/Styles'
import { Listing } from '@/interfaces/listing'
import { ListingsGeoData } from '@/interfaces/listingGeoData'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

type Props = {
	listings: ListingsGeoData
}

const ListingsMap = ({ listings }: Props) => {
	return (
		<View style={defaultStyles.container}>
			<MapView
				style={StyleSheet.absoluteFill}
				showsUserLocation
				showsMyLocationButton
			>
				{listings.features.map((item) => (
					<Marker
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

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
