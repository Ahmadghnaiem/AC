import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { data } from '../assets/res/data'
import Search from '@/components/Search'

const markets = () => {
  const renderData = ()=>{
    return data.map((item)=>{
      console.log(item)
    }

    )
  }
  return (
    <View>
      <Search/>
      <Text>markets</Text>
    </View>
  )
}

export default markets

const styles = StyleSheet.create({})