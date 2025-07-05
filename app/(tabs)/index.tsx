import { Fragment } from "react";
import { FlatList, Text, View,Image, Pressable, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cn from 'clsx';
import CartButton from "@/components/CartButton";
 
export default function App() {
  const offers = [
  {
    id: 1,
    itemName: "summer combo",
    image: require('../../assets/images/burgerCoke.png'),
    color: "#D33B0D"
  },
  {
    id: 2,
    itemName: "burger bash",
    image: require('../../assets/images/burger.png'),
    color: "#EB920C"
  },
  {
    id: 3,
    itemName: "pizza party",
    image: require('../../assets/images/pizza.png'),
    color: "#084137"
  },
  {
    id: 4,
    itemName: "burrito delight",
    image: require('../../assets/images/burrito.png'),
    color: "#DF5A0C"
  }
];

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <FlatList data={offers} renderItem={({item,index}) => {
        const isEven = index % 2 === 0;
        return (
          <View>
            <Pressable android_ripple={{color:"#ffff99"}} className={cn("w-full h-48 my-3 rounded-xl overflow-hidden shadow-lg flex items-center gap-5",isEven?'flex-row-reverse':'flex-row')} style={{backgroundColor:item.color}}>
              {
                ({ pressed }) => (
                  <Fragment>
                    <View className={'h-full w-1/2'}>
                      <Image source={item.image} className={'size-full'} resizeMode={'contain'}/>
                    </View> 

                    <View className={cn('h-full flex w-1/2',isEven?'justify-center pl-10 items-center':'justify-center items-center pr-10')}>
                      <Text className="font-bold flex-row text-white leading-tight text-center text-xl">{(item.itemName).toUpperCase()}</Text>
          
                      <Image className="w-10" resizeMode={'contain'} source={require('../../assets/images/cta.png')}/>
                    </View>
                  </Fragment>
                )
              }
            </Pressable>
          </View>
        )
      }}
      contentContainerClassName="pb-028 px-3"
      ListHeaderComponent={() => (
        <View className="flex justify-between flex-row w-full my-5">
        <View className="flex-start">
          <Text className="font-medium text-xl text-orange-100">DELIVER TO</Text>
          <TouchableOpacity className="flex flex-row items-center justify-between">
            <Text className="text-sm">Parvathipuram</Text>
            <Image source={require('../../assets/images/Polygon 1.png')}/>
          </TouchableOpacity>
        </View>
        <CartButton/>
      </View>
      )}
      />
    </SafeAreaView>
  );
}