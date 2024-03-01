import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ModalHeaderText = () => {
	const [active, setActive] = useState(0)

	return (
		<View
			style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}
		>
			<TouchableOpacity onPress={() => setActive(0)}>
				<Text style={{ fontFamily: 'mon-sb', fontSize: 18 }}>
					Stays
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setActive(1)}>
				<Text>Experiences</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ModalHeaderText
