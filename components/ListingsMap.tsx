import { defaultStyles } from '@/constants/Styles'
import { GeoDataFeature, ListingsGeoData } from '@/interfaces/listingGeoData'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

type Props = {
	listings: ListingsGeoData
}

const ListingsMap = ({ listings }: Props) => {
	const router = useRouter()

	const onMarkerSelected = (item: GeoDataFeature) => {
		router.push(`/listing/${item.properties.id}`)
	}

	return (
		<View style={defaultStyles.container}>
			<MapView
				style={StyleSheet.absoluteFill}
				provider='google'
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
