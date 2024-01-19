import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [exercises, setExercises] = useState(demoExercises)

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
            resizeMode="contain"
            style={{weight: wp(100), height: hp(45)}}
            className="rounded-b-[40px]"
        />
    </ScrollView>
  );
}
