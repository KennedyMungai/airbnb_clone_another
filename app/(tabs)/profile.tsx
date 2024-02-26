import { useAuth } from '@clerk/clerk-react'
import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Profile = () => {
	const { signOut, isSignedIn } = useAuth()

	return (
		<View>
			<Button title='Log Out' onPress={() => signOut()} />
			{!isSignedIn && (
				<Link href={'/(modals)/login'}>
					<Text>Login</Text>
				</Link>
			)}
		</View>
	)
}

export default Profile
