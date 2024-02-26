import Colors from '@/constants/Colors'
import {
	FontAwesome5,
	Ionicons,
	MaterialCommunityIcons
} from '@expo/vector-icons'
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
				options={{
					tabBarLabel: 'Explore',
					headerTitle: 'Explore',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='search' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='wishlists'
				options={{
					tabBarLabel: 'WishLists',
					headerTitle: 'WishLists',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='heart-outline'
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					tabBarLabel: 'Trips',
					headerTitle: 'Trips',
					title: 'Trips',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name='airbnb' size={size} color={color} />
					)
				}}
			/>
			<Tabs.Screen
				name='inbox'
				options={{
					tabBarLabel: 'Inbox',
					headerTitle: 'Inbox',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name='message-outline'
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarLabel: 'Profile',
					headerTitle: 'Profile',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='person-circle'
							color={color}
							size={size}
						/>
					)
				}}
			/>
		</Tabs>
	)
}

export default TabsLayout
