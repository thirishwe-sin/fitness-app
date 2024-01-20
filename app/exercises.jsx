import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from "../components/ExerciseList";
import {ScrollView} from "react-native-virtualized-view"

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState([])
  
  const getExercises = async(bodyParts) => {
    let data = await fetchExercisesByBodyPart(bodyParts)
    setExercises(data)
    console.log(data);
  }

  useEffect(() => {
    if(item){
        getExercises(item.name)
    }
  },[item])

  return (
    <ScrollView>
        <StatusBar style="light" />
        <Image 
            source={item.image}
            // resizeMode="cover"
            style={{width: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
        />
        <TouchableOpacity
            onPress={() => router.back()}
            className="absolute bg-rose-500 mx-4 flex justify-center items-center pr-1 rounded-full "
            style={{width: hp(5.5), height: hp(5.5), marginTop: hp(7)}}
        >
            <Ionicons name="caret-back-outline" size={hp(3)} color="white" />
        </TouchableOpacity>

        <View className="mx-4 space-y-3 mt-4">
            <Text style={{fontSize: hp(3),}} className="font-semibold text-neutral-700 uppercase">
                {item.name} exercise
            </Text>
            <View className="mb-10">
                <ExerciseList data={exercises} />
            </View>
        </View>
    </ScrollView>
  );
}
