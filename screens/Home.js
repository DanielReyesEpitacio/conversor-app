import React from "react";
import { View, Button } from "react-native";

const Home = ({navigation})=>{
    return(
        <View>
            <Button onPress={()=>{
                navigation.navigate('PesoDolar');
            }} title="Ir a PESO-DOLAR"/>
            <Button title="ir a DOLAR-PESO" onPress={()=>{navigation.navigate('DolarPeso')}} />
        </View>
    );
}

export default Home;