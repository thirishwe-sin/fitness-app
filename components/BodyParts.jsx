import { View, Text, FlatList, TouchableOpacity, Image, Animated } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter} from 'expo-router'
import { FadeInDown } from 'react-native-reanimated';

export default function BodyParts() {
  const router = useRouter()

  return (
    <View className="mx-4">
      <Text 
      style={{fontSize: hp(3)}} 
      className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>
      <FlatList 
        data={bodyParts}
        numColumns={2}
        keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{paddingBottom: 50, paddingTop: 20}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({item, index}) => <BodyPartCard index={index} item={item} router={router} />}
      />
    </View>
  )
}

const BodyPartCard = ({item, index, router}) => {
    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200)}>
            <TouchableOpacity
                onPress={() => router.push({pathname: '/exercises', params: item})}
                style={{width: wp(44), height: wp(52)}}
                className="flex justify-end p-4 mb-4"
            >
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{width: wp(44), height: wp(52)}}
                    className="rounded-[35px] absolute"
                />
                <LinearGradient 
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{width: wp(44), height: hp(15)}}
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y:1}}
                    className="absolute bottom-0 rounded-b-[35px]"
                />
                <Text 
                  className="font-semibold text-center text-white tracking-wide"
                  style={{fontSize: hp(2.3)}}
                >
                  {item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}