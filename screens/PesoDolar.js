import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button, TextInput } from "react-native";

const PesoDolar = (navigation) => {

    const [txtPeso, setTxtPeso] = React.useState(0);
    const [txtDolar, setTxtDolar] = React.useState(0);
    const navController = useNavigation();
    return(
        <View>
            <Button title="Atras" onPress={()=> navController.goBack()}/>
            <Text>
                Conversion de peso a dolar
            </Text>
            <Button title="Calcular"/>
            <TextInput placeholder="Introduzca una cantidad en pesos"/>
        </View>
    );
}

export default PesoDolar;