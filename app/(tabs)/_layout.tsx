import Colors from '@/constants/Colors'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
                tabBarLabelStyle: {
                    fontFamily: 'mon-sb'
                }
			}}
		>
			<Tabs.Screen
				name='index'
				options={{ tabBarLabel: 'Explore', headerTitle: 'Explore' }}
			/>
			<Tabs.Screen
				name='wishlists'
				options={{ tabBarLabel: 'WishLists', headerTitle: 'WishLists' }}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					tabBarLabel: 'Trips',
					headerTitle: 'Trips',
					title: 'Trips'
				}}
			/>
			<Tabs.Screen
				name='inbox'
				options={{ tabBarLabel: 'Inbox', headerTitle: 'Inbox' }}
			/>
			<Tabs.Screen
				name='profile'
				options={{ tabBarLabel: 'Profile', headerTitle: 'Profile' }}
			/>
		</Tabs>
	)
}

export default TabsLayout
