import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'

export default function _layout() {
    const isAuthenticated = false;
    if(!isAuthenticated)return <Redirect href='/sign-in'/>
  return <Slot/>
}