import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import React from 'react'
import { Text, View } from 'react-native'

const LoginModal = () => {
    useWarmUpBrowser()

	return (
		<View>
			<Text>LoginModal</Text>
		</View>
	)
}

export default LoginModal
