import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const LoginModal = () => {
	useWarmUpBrowser()

	return (
		<View style={styles.container}>
			<TextInput autoCapitalize='none' placeholder='Email' style={[defaultStyles.inputField]} />
		</View>
	)
}

export default LoginModal

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#fff'
	}
})
