import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { compaines, data } from "@/assets/res/data";
import { Image } from "react-native";
import Images from "./../assets/images/Images";

const errorScreen = () => {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.data);

  const getImageBrand = () => {
    return compaines.find((comp) => comp.name == data.brand[0]).logo;
  };

  console.log(data);

  return (
    <View>
      <Image style={styles.Image} source={getImageBrand()} />
      <Text style={styles.errorCode}>{data.errorCode.toUpperCase()}</Text>
      <Text style={styles.tech}>{data.tech}</Text>
      <Text style={styles.errorMessage}>{data.errorMessage}</Text>
      <Text>{data.Images}</Text>
      <Text style={styles.errorDescription}>{data.errorDescription}</Text>
    </View>
  );
};

export default errorScreen;

const styles = StyleSheet.create({
  errorDescription: {
    textAlign: "right",
    marginRight: 5,
  },
  errorMessage: {
    textAlign: "right",
    marginRight: 5,
  },
  tech: {
    textAlign: "right",
    marginRight: 5,
  },
  errorCode: {
    textAlign: "center",
    color: "red",
    borderWidth: 5,
  },
    Images: {
  // textAlign: "center",
  //  objectFit: "contain",
    },
});
