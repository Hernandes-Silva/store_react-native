import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import SwiperComponent from "../../components/Swiper";
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

export default function detail({ route, navigation }) {
    const [item, setItem] = useState(route.params.item)

    const comprar = async () => {
        var items = await AsyncStorage.getItem('items')
        if (items !== null){
            items = JSON.parse(items)
            var exist = false
            items.map((item2)=>{
                if(item2.id == item.id){
                    exist = true
                    return
                }
            })
            if(!exist){
                items.push(item)
            }
            
            
        }else{
            items = [item]
        }
        await AsyncStorage.setItem('items', JSON.stringify(items))
        navigation.navigate('cart')
        
    }
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={comprar}>
                   <Text style={styles.texttButton}>COMPRAR</Text> 
                </TouchableOpacity>
            </View>

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
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        width:'90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent:'center',
        alignItems:'center'

    },
    texttButton: {
        fontSize:20,
        color:'#fff'
    }


})
