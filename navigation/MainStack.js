import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DolarPeso from '../screens/DolarPeso';
import Home from '../screens/Home';
import PesoDolar from '../screens/PesoDolar';

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
                    name='PesoDolar'
                    component={PesoDolar}
                />
                <Stack.Screen 
                    name='DolarPeso'
                    component={DolarPeso}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack