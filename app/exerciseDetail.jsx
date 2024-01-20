import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function ExerciseDetail() {
  const item = useLocalSearchParams();
  console.log("items passed from list",item);

  return (
    <View>
      <Text>ExerciseDetail</Text>
    </View>
  )
}