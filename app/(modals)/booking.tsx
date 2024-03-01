import { places } from '@/assets/data/places'
import ModalHeaderText from '@/components/ModalHeaderText'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Stack, useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'
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
						<Animated.Text
							entering={FadeIn}
							exiting={FadeOut}
							style={styles.cardHeader}
						>
							Where to?
						</Animated.Text>
						<Animated.View style={styles.cardBody}>
							<View style={styles.searchSection}>
								<Ionicons
									name='search-outline'
									size={20}
									color={'black'}
									style={styles.searchIcon}
								/>
								<TextInput
									style={styles.inputField}
									placeholder='Search Destination'
									placeholderTextColor={Colors.grey}
								/>
							</View>
						</Animated.View>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={{ gap: 25 }}
						>
							{places.map((place, index) => (
								<TouchableOpacity
									key={index}
									onPress={() => setSelectedPlace(index)}
								>
									<Image
										source={place.img}
										style={
											selectedPlace === index
												? styles.placeSelected
												: styles.place
										}
									/>
									<Text>{place.title}</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
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
						<Animated.Text
							entering={FadeIn}
							exiting={FadeOut}
							style={styles.cardHeader}
						>
							When's your trip?
						</Animated.Text>
						<Animated.View style={styles.cardBody}>
							<View></View>
						</Animated.View>
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
						<Animated.Text
							entering={FadeIn}
							exiting={FadeOut}
							style={styles.cardHeader}
						>
							Who's Coming
						</Animated.Text>
						<Animated.View style={styles.cardBody}>
							<View></View>
						</Animated.View>
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
	},
	cardBody: {
		paddingHorizontal: 20,
		paddingBottom: 20
	},
	searchSection: {
		height: 50,
		flexDirection: 'row',
		borderColor: 'black',
		borderRadius: 8,
		borderWidth: StyleSheet.hairlineWidth,
		backgroundColor: 'white',
		alignContent: 'center',
		alignItems: 'center',
		marginBottom: 16
	},
	inputField: {
		flex: 1,
		padding: 10,
		backgroundColor: 'white'
	},
	searchIcon: {
		padding: 10
	},
	place: {
		width: 100,
		height: 100,
		borderRadius: 10
	},
	placeSelected: {
		width: 100,
		height: 100,
		borderRadius: 10,
		borderWidth: 2,
		borderColor: Colors.grey
	}
})
