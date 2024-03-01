import ModalHeaderText from '@/components/ModalHeaderText'
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { SlideInDown } from 'react-native-reanimated'

const BookingModal = () => {
	const router = useRouter()

	const [openCard, setOpenCard] = useState(0)
	const [selectedPlace, setSelectedPlace] = useState(0)

	const onClearAll = () => {
		setSelectedPlace(0)
		setOpenCard(0)
	}

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
					<TouchableOpacity
						onPress={onClearAll}
						style={{ justifyContent: 'center' }}
					>
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
					<TouchableOpacity
						onPress={() => router.back()}
						style={[
							defaultStyles.btn,
							{ paddingRight: 20, paddingLeft: 50 }
						]}
					>
						<Ionicons
							name='search-outline'
							size={24}
							color={'white'}
							style={defaultStyles.btnIcon}
						/>
						<Text style={defaultStyles.btnText}>Clear All</Text>
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
	},
	card: {
		backgroundColor: 'white',
		borderRadius: 14,
		margin: 10,
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowRadius: 0.4,
		shadowOffset: {
			width: 2,
			height: 2
		},
		gap: 20
	}
})
