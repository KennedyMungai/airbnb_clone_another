import { useUser } from '@clerk/clerk-expo'
import { useAuth } from '@clerk/clerk-react'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

const Profile = () => {
	const { signOut, isSignedIn } = useAuth()
	const { user } = useUser()

	const [firstName, setFirstName] = useState(user?.firstName)
	const [lastName, setLastName] = useState(user?.lastName)
	const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress)
	const [edit, setEdit] = useState(false)

	useEffect(() => {
		if (!user) return

		setFirstName(user.firstName)
		setLastName(user.lastName)
		setEmail(user.emailAddresses[0].emailAddress)
	}, [user])

	const onSaveUser = async () => {}

	const onCaptureImage = async () => {}

	return (
		<View>
			<View style={styles.headerContainer}>
				<Text>Profile</Text>
				<Ionicons name='notifications-outline' size={26} />
			</View>
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

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		padding: 24,
		justifyContent: 'space-between'
	}
})
