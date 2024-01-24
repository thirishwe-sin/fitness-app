import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Carousel, {ParallaxImage} from 'react-native-snap-carousel'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { sliderImages } from '../constants';
import { getRequest, localhost_url } from '../api/apiService';
import axios from 'axios'

// export const requestBanner = async (url) => {
//   console.log(url);
//   try {
//       const res = await fetch(url, {
//           method: "GET",
//           headers: {
//               Accept: "application/json",
//               "Content-Type": "multipart/form-data",
//           },
//       });
//       if (!res.ok) {
//           const json = await res.json();
//           throw new Error(json?.message || "No data");
//       }
//       const json = await res.json();
//       console.log(json.data);

//       return json.data;
//   } catch (error) {
//       console.log(error);
//       throw error;
//   }
// };

export default function ImageSlider() {

  // const [sliderImage, setSliderImages] = useState([])

  // const fetchBanners = async() => {
  //   const response = await requestBanner('https://6159-204-157-172-103.ngrok-free.app/api/banners')
  //   setSliderImages(response)
    
  // }
  // useEffect(() => {
  //   fetchBanners()
  // },[])
  
  // console.log(sliderImage);
  // const modifiedResponse = sliderImage.map(item => ({
  //   ...item,
  //   image: 'http://localhost:8000/storage/'+  item.image.replace('public/', ''),
  // }));
  // // setSliderImages(modifiedResponse);
  // console.log("response",modifiedResponse);
 
  return (
    <Carousel 
        // data={modifiedResponse}
        data={sliderImages}
        loop={true}
        autoplay={true}
        autoplayInterval={4000}
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        itemWidth={wp(100)-70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
    />
  )
}

const ItemCard = ({ item, index }, parallaxProps) => {
  console.log('item.image', item);
  return (
    <View style={{ width: wp(100) - 75, height: hp(25) }}>
      <ParallaxImage
        source={ item }
        containerStyle={{ borderRadius: 30, flex: 1,}}
        style={{ resizeMode: 'contain' }}
        parallaxFactor={1}
        {...parallaxProps}
      />
      {/* <Text>
        {item.name}
      </Text> */}
    </View>
  );
};
