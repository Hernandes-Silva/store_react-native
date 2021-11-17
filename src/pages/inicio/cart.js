import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
export default function cart({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <View style={styles.containerImage} >
                    <Image source={require("../../assets/tenis3.jpg")}
                    style={styles.image}/>
                </View>
                <View style={styles.containerDescription}>
                    <Text style={styles.description}>dasdsad</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem:{
        marginVertical:20,
        marginHorizontal:20,
        flexDirection: 'row'
    },
    containerImage:{
        width:'40%'

    },
    containerDescription:{
        width:'58%',
        marginLeft:'2%'
    },
    description:{
        paddingHorizontal:20,
        fontSize:15,
        color: '#000',
        marginTop: 20,
        lineHeight: 18
    },
    image:{
        width:'100%',
        height:150,
    }
})