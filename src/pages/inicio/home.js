import React, { useState } from "react";
import { View, StyleSheet, ScrollView, FlatList, Text } from "react-native";
import Product from "../../components/Product";

export default function Home({ navigation }) {

    const [novidades, setNovidades] = useState([])

    React.useEffect(() => {
        data = [
            {
                'name': 'tênis ',
                'description': 'Tenis super lindo maravilhoso foi o que eu comprei' ,
                'id': 1, 'image': (require("../../assets/tenis.jpg")),
                'price': 120
            },
            {
                'name': 'tênis2',
                'description': 'Tenis super lindo maravilhoso foi o que eu comprei',
                'id': 2, 'image': (require("../../assets/tenis2.jpg")),
                'price': 150.1
            },
            {
                'name': 'tênis3',
                'description': 'Tenis super lindo maravilhoso foi o que eu comprei',
                'id': 3, 'image': (require("../../assets/tenis3.jpg")),
                'price': 500
            }]
        setNovidades(data)
    }, [])
    const renderItem = ({ item, index }) => {
        function detail(){
            navigation.navigate('detail',{item:item})
        }
        return (<Product item={item} detail={detail}/>)
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}
            style={{ backgroundColor: '#fff', }}
        >
            <View style={styles.contentView}>
                <Text style={styles.title}>
                    Novidades
                </Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ paddingHorizontal: 15 }}
                data={novidades}
                renderItem={renderItem}
                keyExtractor={item => `key ${item.id}`}
            />
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    contentView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 20

    },
    title: {
        paddingHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#4f4a4a'
    }
})