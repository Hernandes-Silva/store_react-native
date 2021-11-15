import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet, View, Image } from "react-native";
import SwiperComponent from "../../components/Swiper";
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/Ionicons';
export default function detail({ route, navagation }) {
    const [item, setItem] = useState(route.params.item)
    return (
        <View style={styles.container}>
            <View style={styles.swiperContent}>
                <SwiperComponent item={item} />
            </View>
            <View style={styles.headerContent}>
                <View style={{ width: '65%' }}>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={{ width: '35%' }}>
                    <Text style={styles.avaliacao}>avaliaçôes</Text>
                    <View style={{alignItems:'center', flexDirection:'row'}}>
                        <Stars 
                        default = {4}
                        count={5}
                        half={true}
                        starSize={20}
                        fullStar={<Icon name={'md-star'} size={26} style={[styles.myStarStyle]}/>}
                        emptyStar={<Icon name={'md-star-outline'} size={26} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                        halfStar={<Icon name={'md-star-half'} size={26} style={[styles.myStarStyle]}/>}
                        />
                    </View>
                </View>
            </View>
            <Text style={styles.price}>R$ {item.price}</Text>
            <Text style={styles.description}>{item.description}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    swiperContent: {
        flexDirection: 'row',
        height: 340,
        width: "100%"
    },
    headerContent: {
        paddingHorizontal:20,
        flexDirection: 'row',
        alignItems: 'center',
        width:'100%',
        marginTop: 20,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 23,
        color: '#4f4a4a'
    },
    avaliacao:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4f4a4a'
    },
    myStarStyle:{
        color: '#E7A74e',
        backgroundColor: 'transparent',
        textShadowColor: '#000',
        textShadowOffset: {width:1, height: 1},
        textShadowRadius:1
    },
    price:{
        paddingHorizontal:20,
        fontWeight: 'bold',
        fontSize:23,
        color: '#000',
    },
    description:{
        paddingHorizontal:20,
        fontSize:18,
        color: '#000',
        marginTop: 20,
        lineHeight: 20
    }


})
