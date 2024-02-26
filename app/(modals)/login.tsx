import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { Ionicons } from '@expo/vector-icons'
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

			<View>
				<TouchableOpacity style={[styles.btnOutline, { gap: 16 }]}>
					<Ionicons name='call-outline' size={24} />
					<Text style={styles.btnOutlineText}>
						Continue With Phone
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
		paddingHorizontal: 10
	},
	btnOutlineText: {
		color: '#000',
		fontSize: 16,
		fontFamily: 'mon-sb'
	}
})
