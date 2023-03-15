import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

const  Conversor = ({route})=>{
    const {buttonId, text} = route.params;
    const navController = useNavigation();

    let buttonIdentifier = '';

    if(buttonId == '1'){
        buttonIdentifier = 'btn1';
    }else{
        buttonIdentifier = 'btn2';
    }

    return(
        <View>
            <TouchableOpacity onPress={navController.goBack}>
                <Text>Volver</Text>
            </TouchableOpacity>
            <Text>{buttonIdentifier + ": " + text}</Text>
        </View>

    );
}

export default Conversor;