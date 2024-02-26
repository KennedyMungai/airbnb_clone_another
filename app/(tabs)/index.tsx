import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TabsIndexPage = () => {
	return (
		<View>
			<Link href='/(modals)/login'>Login</Link>
			<Link href='/(modals)/booking'>Booking</Link>
			<Link href='/listing/1000'>A listing</Link>
		</View>
	)
}

export default TabsIndexPage
