
import AsyncStorage from "@react-native-community/async-storage";
import React, { useReducer, useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'
export default function cart({ navigation }) {
    const [items, setItems] = useState([])
    React.useEffect(() => {
        async function getItem() {

            var list_items = await AsyncStorage.getItem('items')
            if (list_items !== null) {
                setItems(JSON.parse(list_items))
            }
            console.log(items)
            console.log(items)
        }
        getItem()
    }, [])
    return (
        <ScrollView>
        <View style={styles.container}>
            {items.map((item, key) => {
                return (
                    <View style={styles.containerItem} key={key}>
                        <View style={styles.header}>
                            <View style={styles.containerImage} >
                                <Image source={item.image}
                                    style={styles.image} />
                            </View>
                            <View style={styles.containerDescription}>
                                <Text style={styles.price}>R$ {item.price}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.content}>
                            <Icon name='trash-o' size={25} color={'red'} />
                            <Text style={{ fontSize: 15, color: 'red' }}> excluir item</Text>
                        </TouchableOpacity>

                    </View>
                )
            })}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: 'black',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 4
    },
    header: {
        flexDirection: 'row',
    },
    content: {
        marginVertical: 5,
        paddingLeft: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerImage: {
        width: '40%'

    },
    containerDescription: {
        width: '58%',
        marginLeft: '2%'
    },
    description: {
        paddingHorizontal: 20,
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        lineHeight: 18
    },
    price:{
        paddingHorizontal: 18,
        fontSize: 20,
        color: 'blue',
        marginTop: 20,
        lineHeight: 19,
    },
    image: {
        width: '100%',
        height: 150,
    }
})