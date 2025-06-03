import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router'

const index = () => {
  setTimeout(() => {
    router.replace("/home")
  }, 1 * 1000)
  const onCardPress = () => { }
  return (
    <View style={styles.conatiner}>
      {/* <ScrollView> */}
        <TouchableOpacity onPress={onCardPress}>
          <Text style={styles.AC}>A.C</Text>
        </TouchableOpacity>
        <FontAwesome5 name="snowflake" size={24} color="lightblue" style={styles.snowflake} />
        <FontAwesome5 name="snowflake" size={24} color="lightblue" style={styles.snowflake1} />
      {/* </ScrollView> */}
    </View>


  )
}

export default index

const styles = StyleSheet.create({
  AC: {
    // backgroundColor:'red',
    borderWidth: 0,
    fontSize: 180,
    fontWeight: '500'
  },
  conatiner: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: 'center'
  },
  snowflake: {
    flexDirection: 'row',
    fontSize: 100,
    // marginLeft:

  },
  snowflake1: {
    width: 20,


  }
})
