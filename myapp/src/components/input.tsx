import { View, TextInput, Text, StyleSheet, TextInputProps, ColorValue } from "react-native";
import React from "react";

type InputProps = TextInputProps &{ // & além das propriedades que existe em TextInputProps adcionamos as propriedades que criamos label, icon.

    label? : string;                // variavél que guarda o texto do label
    labelColor? : ColorValue;       // variavél que muda a cor do texto do label
    backgroundColor? : ColorValue;  // variavél que muda a cor do input
    borderColor? : ColorValue;      // variavél que muda a cor da borda do input
    icon? : React.ReactNode;  // aceita diferentes formatos de icons ex: Aceita Fontisto, Feather, Ionicons, SVG, PNG, etc.
}



export function Input({
    label,
    labelColor = "#43216D",                 // definição padrão de inputs
    backgroundColor = "#EAEAEA",
    borderColor = "#905BF4",
    placeholderTextColor = "#8b76a5c9",
    icon, 
    style,
    ...outrasProps}: InputProps){
    const customLabelStyle = [styles.label, { color: labelColor}];
    const customInputBoxStyle = [styles.inputBox, { backgroundColor, borderColor }];

    return (
        <View style = {styles.container}>
            {label && <Text style ={customLabelStyle}>{label}</Text>}
            <View style={customInputBoxStyle}>{icon && <View style={styles.icon}>{icon}</View>}
                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor={placeholderTextColor}
                    {...outrasProps}/>
            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    container :{
        width: "100%",
        marginBottom: 20,
        marginTop: 0
    },
    label :{

        fontSize: 14,
        fontFamily: "Poppins_500Medium",
        padding: 15,

    },

    inputBox:{
        flexDirection: "row",
        alignItems:"center",
        padding: 12,
        borderRadius: 25,
        borderWidth: 1,
        },

    icon:{
        marginRight: 20
    },

    input:{
        flex: 1,
        fontSize: 15,
        fontFamily: "Poppins__400Regular",
    }
})