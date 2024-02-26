import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

enum Strategy {
	Google = 'oauth_google',
	Apple = 'oauth_apple',
	Facebook = 'oauth_facebook'
}

const LoginModal = () => {
	useWarmUpBrowser()

	const { startOAuthFlow: appleAuth } = useOAuth({
		strategy: 'oauth_apple'
	})
	const { startOAuthFlow: facebookAuth } = useOAuth({
		strategy: 'oauth_facebook'
	})
	const { startOAuthFlow: googleAuth } = useOAuth({
		strategy: 'oauth_google'
	})

	const onSelectAuth = async (strategy: Strategy) => {}

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
			<View style={styles.separatorView}>
				<View
					style={{
						borderBottomColor: '#000',
						borderBottomWidth: StyleSheet.hairlineWidth,
						flex: 1
					}}
				/>
				<Text style={styles.separator}>Or</Text>
				<View
					style={{
						borderBottomColor: '#000',
						borderBottomWidth: StyleSheet.hairlineWidth,
						flex: 1
					}}
				/>
			</View>

			<View style={{ gap: 24 }}>
				<TouchableOpacity style={styles.btnOutline}>
					<Ionicons name='call-outline' size={24} />
					<Text style={styles.btnOutlineText}>
						Continue With Phone
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Apple)}
				>
					<Ionicons name='logo-apple' size={24} />
					<Text style={styles.btnOutlineText}>
						Continue With Apple
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Facebook)}
				>
					<Ionicons name='logo-facebook' size={24} />
					<Text style={styles.btnOutlineText}>
						Continue With Facebook
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnOutline}
					onPress={() => onSelectAuth(Strategy.Google)}
				>
					<Ionicons name='logo-google' size={24} />
					<Text style={styles.btnOutlineText}>
						Continue With Google
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default LoginModal

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		backgroundColor: '#fff'
	},
	separatorView: {
		flexDirection: 'row',
		gap: 10,
		alignItems: 'center',
		marginVertical: 30
	},
	separator: {
		fontFamily: 'mon-sb',
		color: Colors.grey
	},
	btnOutline: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: Colors.grey,
		height: 50,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		gap: 20
	},
	btnOutlineText: {
		color: '#000',
		fontSize: 16,
		fontFamily: 'mon-sb'
	}
})
