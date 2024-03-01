import ModalHeaderText from '@/components/ModalHeaderText'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated'

const AnimatedTouchableOpacity =
	Animated.createAnimatedComponent(TouchableOpacity)

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

			{/* Where */}
			<View style={styles.card}>
				{openCard !== 0 && (
					<AnimatedTouchableOpacity
						onPress={() => setOpenCard(0)}
						style={styles.cardPreview}
						entering={FadeIn.duration(200)}
						exiting={FadeOut.duration(200)}
					>
						<Text style={styles.previewText}>Where</Text>
						<Text style={styles.previewDate}>I'm Flexible</Text>
					</AnimatedTouchableOpacity>
				)}

				{openCard === 0 && (
					<>
						<Text style={styles.cardHeader}>Where to?</Text>
					</>
				)}
			</View>

			{/* When */}
			<View style={styles.card}>
				{openCard !== 1 && (
					<AnimatedTouchableOpacity
						onPress={() => setOpenCard(1)}
						style={styles.cardPreview}
						entering={FadeIn.duration(200)}
						exiting={FadeOut.duration(200)}
					>
						<Text style={styles.previewText}>When</Text>
						<Text style={styles.previewDate}>Any Week</Text>
					</AnimatedTouchableOpacity>
				)}

				{openCard === 1 && (
					<>
						<Text style={styles.cardHeader}>When's your trip?</Text>
					</>
				)}
			</View>

			{/* Who */}
			<View style={styles.card}>
				{openCard !== 2 && (
					<AnimatedTouchableOpacity
						onPress={() => setOpenCard(2)}
						style={styles.cardPreview}
						entering={FadeIn.duration(200)}
						exiting={FadeOut.duration(200)}
					>
						<Text style={styles.previewText}>Who</Text>
						<Text style={styles.previewDate}>Add guests</Text>
					</AnimatedTouchableOpacity>
				)}

				{openCard === 2 && (
					<>
						<Text style={styles.cardHeader}>Who's Coming</Text>
					</>
				)}
			</View>

			{/* Footer */}
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
	},
	previewText: {
		fontFamily: 'mon_sb',
		fontSize: 14,
		color: Colors.grey
	},
	previewDate: {
		fontFamily: 'mon_sb',
		fontSize: 14,
		color: Colors.dark
	},
	cardPreview: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	},
	cardHeader: {
		fontFamily: 'mon_sb',
		fontSize: 24,
		padding: 20
	}
})
