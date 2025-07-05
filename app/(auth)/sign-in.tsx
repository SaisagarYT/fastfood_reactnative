import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { router } from 'expo-router'

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Button title='Sign In' onPress={() => router.push('/sign-up')}></Button>
    </View>
  )
}

export default Signin