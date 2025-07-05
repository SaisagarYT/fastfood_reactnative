import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { router } from 'expo-router';

const Signup = () => {
  return (
    <View>
      <Text>Signup</Text>
      <Button title='Sign In' onPress={() => router.push('/sign-in')}></Button>
    </View>
  )
}

export default Signup