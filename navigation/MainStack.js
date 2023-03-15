import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Conversor from '../screens/Conversor';

const Stack = createNativeStackNavigator();
const MainStack = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Home'
                    component = {Home}
                />
                <Stack.Screen 
                    name='Conversor'
                    component={Conversor}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack