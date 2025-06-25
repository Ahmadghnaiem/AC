import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { use, useState } from "react";
import Images from "./../assets/images/Images";
import { Image } from "react-native";
const Card = (props) => {
  const [Colors, setColors] = useState("white");

  const onCardpress = () => {
    Alert.alert(props.name + " " + props.price);
    setColors(Colors=='white'?'red':'white');
  };

  return (
    <TouchableOpacity onPress={onCardpress}>
      <View style={[styles.caard, { backgroundColor: Colors }]}>
        <Image style={styles.Image} source={props.img} />
        <View>
          <Text style={styles.name}>{"name:" + props.name} </Text>
          <Text style={styles.price}>price:{props.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  name: {
     marginTop: 20,
    //  marginRight:100
     color:'red',
     width:'100%' , 
    //  borderWidth: 2,
  },
  price: {
    //  marginLeft:300,
    marginTop: 25,
     color:'red',
  },
  Image: {
   
    // height: 100,
    marginLeft: 3,
    marginRight: 20,
    width: "60%",
    resizeMode: "contain",
    maxHeight: 100,
  },
  caard: {
    flexDirection: "row",
     marginLeft:20,
     marginRight:20,
    borderWidth: 3,
    marginTop: 30,
  },
});
