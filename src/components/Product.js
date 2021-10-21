
import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text, View  } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
const textColor = '#4f4a4a'
export default function Product(props){
    
    return(
        <TouchableOpacity style={styles.container}>
            <Image 
            style={styles.cover}
            source={props.item.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {props.item.name}
                </Text>
                <View style={styles.dot}></View>
                <Text style={styles.badge}>Novo</Text>
            </View>
            <Text style={styles.description}>
                {props.item.description}
                </Text>
            <View style={styles.footer}>
                <View style ={{width:'80%'}}>
                    <Text style={styles.price}>R$ {props.item.price}</Text>
                </View>
                <View style ={{width:'20%'}}>
                    <Icon size={24} name="ios-add-circle" color="black"/>
                </View>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        marginTop:20,
        backgroundColor: '#fff',
        height: 250,
        width:210,
        elevation: 2,
        borderRadius:10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2, 
        marginBottom:5
    },
    cover:{
        height:110,
        width:170,
    },
    content:{
    flexDirection:'row',
    alignItems: 'center',
    marginVertical:10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: textColor
    },
    dot:{
        width: 4,
        height: 4,
         borderRadius: 4,
         backgroundColor : 'red',
         marginHorizontal: 4
    },
    badge:{
        color:'red',
        fontSize:12,
    },
    description :{
        fontSize: 12,
        
        color: textColor
    },
    footer:{
        flexDirection: 'row',
        marginTop:5,
        alignItems:'center',
        width:'100%'
    },
    price:{
        fontWeight:'bold',
        fontSize:18
    }

})