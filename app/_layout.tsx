import { Stack } from "expo-router";
// import {useFonts} from 'expo-font';
import { useEffect } from "react";
import "./global.css"

export default function RootLayout() {
 
  return <Stack screenOptions={{headerShown:false}} />;
}
