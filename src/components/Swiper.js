import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swiper from 'react-native-swiper'

export default function SwiperComponent(props) {
    return (
        <Swiper
            style={styles.teste}
            dotStyle={{
                backgroundColor: '#000',
                borderBottomColor: '#000',
                borderWidth: 1,
                width: 10,
                height: 10,
                borderRadius: 10,
            }}
            activeDotColor='#fff'
            activeDotStyle={{
                borderColor: '#000',
                borderWidth: 1,
                width: 10,
                height: 10,
                borderRadius: 10,
            }}
        >
            <View style={styles.slide}>
                <Image
                    source={props.item.image}
                    style={{ width: '100%', height: 300 }}
                />
            </View>
           
            <View style={styles.slide}>
                <Image
                    source={props.item.image}
                    style={{ width: '100%', height: 300 }}
                />
            </View>
        </Swiper>
    )
}
const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
