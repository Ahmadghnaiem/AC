import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Images from "./../assets/images/Images";
import { compaines } from "@/assets/res/data";
import { useNavigation } from "expo-router";
import SCREEN_NAMES from "@/constants/ScreenNames";


const ErrorItem = (props) => {

  const navigation=useNavigation();

  const getImageBrand = () => {
    return compaines.find((comp) => comp.name == props.brand[0]).logo;
  };

  const onItemPress = ()=>{
    const dataStr=JSON.stringify(props);
    navigation.navigate(SCREEN_NAMES.ErrorScreen , {data:dataStr});
  }

  return (
    
    <TouchableOpacity onPress={onItemPress}>
      <View style={styles.error}>
        <View style={styles.Top}>
          <Image style={styles.Image} source={getImageBrand()} />
          <View>
            <Text style={styles.errorcode}>{props.errorCode.toUpperCase()}</Text>
            <Text style={styles.errormessage}>{props.errorMessage}</Text>
            <Text style={styles.tech}>{props.tech}</Text>            
            <Text style={styles.Images}>{props.Images}</Text>            
            {/* <Text style={styles.errorDescription}>
              {props.errorDescription}
            </Text> */}
          </View>
        </View>
        <View>{/* <Text style={styles.errorcode}>Error</Text> */}</View>
      </View>
    </TouchableOpacity>
    
  );
};
export default ErrorItem;

const styles = StyleSheet.create({
  error: {
    borderWidth: 1,
    borderRadius: 17,
    overflow: "hidden",
    marginTop: 10,
  },
  Top: {
    flexDirection: "row",
  },
  errormessage: {
    marginLeft: 20,
    color: "green",
  },
  Image: {
    //  width: "60%",
    //  flexDirection: "row",
    width: 80,
    height: 80,
    objectFit: "contain",
    // marginLeft: 10,
  },
  tech: {
    marginLeft: 20,
  },
  errorcode: {
    marginLeft: 20,
    color: "red",
    fontWeight: "bold",
    fontSize: 25,
  },
  errorDescription: {
    padding:20,
  },
});
