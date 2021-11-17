import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/inicio/home';
import detail from './pages/inicio/detail';
import cart from './pages/inicio/cart';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
const Stack = createStackNavigator();
const navigationRef = React.createRef();
export default function App() {
    const textColor = 'black'
    async function navigateCart() {
        try {
            navigationRef.current?.navigate('cart')
        }
        catch (exception) {
            alert(exception)
        }
    }

    
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{
                headerRight: () => (
                    <TouchableOpacity style={{ marginRight: 15 }} onPress={navigateCart}>
                        <Icon size={24} name='shopping-bag' color={textColor} />
                    </TouchableOpacity>
                )
            }}> 
                <Stack.Screen name="home"
                    options={{
                        title: 'Home',
                        headerTintColor: textColor,
                        headerTitleStyle: { color: textColor, alignItems: 'center', justifyContent: 'center' },
                        
                    }}
                    component={Home} />
                <Stack.Screen
                    name="detail"
                    options={{
                        title: 'Detalhes',
                        headerTintColor: textColor,
                        headerTitleStyle: { color: textColor, alignItems: 'center', justifyContent: 'center' },
                        
                    }}
                    component={detail} />
                    <Stack.Screen name="cart"
                        options= {{
                            title: 'Cart',
                            headerTintColor: textColor,
                            headerTitleStyle: { color: textColor, alignItems: 'center', justifyContent: 'center' },
                            headerRight: () =>{
                                <View></View>
                            }
                        }}

                        
                        component={cart}
                    />
            </Stack.Navigator>

        </NavigationContainer>
    )
}