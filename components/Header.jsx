import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
// import Home from '@/app/Home'
import { router } from 'expo-router'
import Tool from './../app/tool';

const Header = () => {

    const onmarketspress = () => {
        console.log("pressed", true)
        router.push("/markets")
    }

    const onToolpress = () => {
        router.push("/tool")

    }

    const onconsultation = () => {
        console.log("clicked");

        router.push("/consultation")
    }

    const onsettings = () => {
        console.log("settings");

        router.push("/settings")
    }

    const onducation = () => {
        console.log("education");
        router.push("/education")
    }


    return (
            <ScrollView horizontal={true}>
        <View style={styles.conatiner}>
            {/* <View style={styles.icon}>
                <Ionicons style={styles.home} name='home-outline' size={30} />
                <Text>Home</Text>
            </View> */}
            {/* <View style={styles.icon}> */}
            <Ionicons name='list-outline' style={styles.tt} size={30} />
            <TouchableOpacity onPress={onToolpress}>
                <Ionicons name='construct-outline' style={styles.maintenance} size={30} color={'#000'} />
                <Text>Tool</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onconsultation}>
                <Ionicons name='bulb-outline' style={styles.consultation} size={30} />
                <Text>consultation</Text>
            </TouchableOpacity>
            {/* <Ionicons name='globe-outline' style={styles.forlanguage} size={30} /> */}
            {/* <Text>forlanguage</Text> */}

            <TouchableOpacity onPress={onmarketspress}>
                <Ionicons name='cart-outline' style={styles.markets} size={30} />
                <Text>markets</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onsettings}>
                <Ionicons name='settings-sharp' style={styles.settings} size={30} />
                <Text>settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onducation}>
                <Ionicons name='school-sharp' style={styles.education} size={30} />
                <Text>education</Text>
                
            </TouchableOpacity>

            {/* </View> */}
        </View>
            </ScrollView>
    )
}

export default Header

const styles = StyleSheet.create({
    conatiner: {
        flwx: 1,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'10'
    },
    icon: {
        flexDirection: "column"

    },
    tt:{
        
    },
    maintenance:{
        
    }

})