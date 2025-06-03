import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from './../components/Header';
import { Ionicons } from '@expo/vector-icons';
import Search from '@/components/Search';

const Home = () => {
  return (
    <View>
      <Search/>
      <Header />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  search: {
    width: 300,
    
  },
  searchaicn: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    width: 300,
    margin: 'auto',
    borderRadius:10,
    fontSize:10
  }
})