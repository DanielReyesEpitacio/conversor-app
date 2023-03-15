import React from "react";
import { View, Button } from "react-native";

const Home = ({navigation})=>{
    return(
        <View>
            <Button onPress={()=>{
                navigation.navigate('Conversor', {buttonId:1, text: 'holi'});
            }} title="Ir a peso - dolar"/>
        </View>
    );
}

export default Home;