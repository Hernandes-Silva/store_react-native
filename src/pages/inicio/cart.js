import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
export default function cart({navigation}){
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <View style={styles.header}>
                    <View style={styles.containerImage} >
                        <Image source={require("../../assets/tenis3.jpg")}
                        style={styles.image}/>
                    </View>
                    <View style={styles.containerDescription}>
                        <Text style={styles.description}>Esse um é um tenis pro d klr </Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Icon name='trash-o' size={25} color={'blue'} />
                    <Text style={{fontSize:15, color:'blue'}}> excluir item</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerItem:{
        backgroundColor:'white',
        marginVertical:20,
        marginHorizontal:20,
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor: 'black',
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation:4
    },
    header:{
        flexDirection: 'row',
    },
    content:{
        marginVertical:5,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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