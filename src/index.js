import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/inicio/home';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
const Stack = createStackNavigator();
export default function App() {
    const textColor = 'black'
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" 
                options={{
                    title: 'Home',
                    headerTintColor: textColor,
                    headerTitleStyle: { color: textColor, alignItems: 'center', justifyContent: 'center' },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Icon size={24} name='shopping-bag' color={textColor} />
                        </TouchableOpacity>
                    )
                }}
                component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}