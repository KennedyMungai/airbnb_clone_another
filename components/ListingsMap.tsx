import { defaultStyles } from '@/constants/Styles'
import { GeoDataFeature, ListingsGeoData } from '@/interfaces/listingGeoData'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-map-clustering'
import { Marker } from 'react-native-maps'

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
					>
						<View style={styles.marker}>
							<Text style={styles.markerText}>
								€ {item.properties.price}
							</Text>
						</View>
					</Marker>
				))}
			</MapView>
		</View>
	)
}

export default ListingsMap

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	marker: {
		backgroundColor: 'white',
		padding: 6,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 12,
		elevation: 5,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 6,
		shadowOffset: {
			width: 1,
			height: 10
		}
	},
	markerText: {
		fontSize: 14,
		fontFamily: 'mon-sb'
	}
})
