import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import Images from "./../assets/images/Images";
import { Image } from "react-native";
import Card from "@/components/Card";
import { renderer } from 'react-test-renderer';
import { data, tstdata } from "@/assets/res/data";

export default function RootLayout() {
  
  const rendererCards =()=>{
    const Cards =tstdata.map ((item)=>{
      return(
      )

    })
    return Cards;

  }


  return (
    <Stack >
    <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
  );

  
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  name: {

  },
  price: {

  },
  Image: {
    backgroundColor:'red' , 
    borderWidth:2 , 
    height:100,
  },
  caard:{
    flexDirection:'row',
    
  },

});
