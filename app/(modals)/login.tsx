import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import React from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'

const LoginModal = () => {
	useWarmUpBrowser()

	return (
		<View style={styles.container}>
			<TextInput
				autoCapitalize='none'
				placeholder='Email'
				style={[defaultStyles.inputField, { marginBottom: 30 }]}
			/>
			<TouchableOpacity style={defaultStyles.btn}>
				<Text style={defaultStyles.btnText}>Continue</Text>
			</TouchableOpacity>
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
