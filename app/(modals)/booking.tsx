import ModalHeaderText from '@/components/ModalHeaderText'
import { defaultStyles } from '@/constants/Styles'
import { BlurView } from 'expo-blur'
import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { SlideInDown } from 'react-native-reanimated'

const BookingModal = () => {
	const router = useRouter()

	const onClearAll = () => {}

	return (
		<BlurView style={styles.container} intensity={70} tint={'light'}>
			<Stack.Screen
				options={{
					headerTransparent: true,
					headerTitle: () => <ModalHeaderText />
				}}
			/>
			<Animated.View
				style={defaultStyles.footer}
				entering={SlideInDown.delay(200)}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<TouchableOpacity onPress={onClearAll}>
						<Text
							style={{
								fontSize: 18,
								fontFamily: 'mon_sb',
								textDecorationLine: 'underline'
							}}
						>
							Clear All
						</Text>
					</TouchableOpacity>
				</View>
			</Animated.View>
		</BlurView>
	)
}

export default BookingModal

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100
	}
})
