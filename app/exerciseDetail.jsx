import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ExerciseDetail() {
  const item = useLocalSearchParams();
  console.log("items passed from list", item);

  return (
    <View className="flex flex-1">
      <StatusBar style="dark" />
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          style={{ height: wp(100), width: wp(100) }}
          className="rounded-b-[40px]"
          contentFit="cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
        style={{ marginTop: hp(5) }}
      >
        <AntDesign name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      <ScrollView className="mx-4 space-y-2 mt-3">
        <Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3.5) }}
        >
          {item?.name}
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Equipment <Text
            className="font-bold text-neutral-800"
          >
            {item?.equipment}
          </Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Secondary Muscles <Text
            className="font-bold text-neutral-800"
          >
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 tracking-wide"
        >
          Target <Text
            className="font-bold text-neutral-800"
          >
            {item?.target}
          </Text>
        </Text>

        <Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}
        >
          Instructions
        </Text>
        {/* {
          item?.instructions.split(',').map(())
        } */}
      </ScrollView>
    </View>
  );
}
