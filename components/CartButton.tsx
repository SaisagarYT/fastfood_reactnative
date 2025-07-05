import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const CartButton = () => {
    const totalItems = 5;
  return (
    <TouchableOpacity className="w-12 rounded-full h-12 relative flex items-center justify-center bg-black">
        <Image resizeMode={'contain'} className="" source={require('../assets/images/Frame.png')}/>
        {
            totalItems > 0 && totalItems <= 50 && (
                <View className='bg-orange-100 absolute -top-4 -right-1 rounded-full w-7 h-7 justify-center items-center'>
                    <Text className='text-sm text-center'>{totalItems}</Text>
                </View>
            )
        }
    </TouchableOpacity>
  )
}

export default CartButton