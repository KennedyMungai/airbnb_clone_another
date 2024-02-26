import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{ tabBarLabel: 'Home', headerTitle: 'Home' }}
			/>
			<Tabs.Screen
				name='inbox'
				options={{ tabBarLabel: 'Inbox', headerTitle: 'Inbox' }}
			/>
			<Tabs.Screen
				name='explore'
				options={{ tabBarLabel: 'Explore', headerTitle: 'Explore' }}
			/>
			<Tabs.Screen
				name='profile'
				options={{ tabBarLabel: 'Profile', headerTitle: 'Profile' }}
			/>
			<Tabs.Screen
				name='wishlists'
				options={{ tabBarLabel: 'WishLists', headerTitle: 'WishLists' }}
			/>
		</Tabs>
	)
}

export default TabsLayout
