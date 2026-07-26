import { 
    StyleSheet,
    Text,
    TouchableOpacity, // torna a ara clicável.
    TouchableOpacityProps, // tipagem do TouchableOpacity
    ColorValue,
 } from "react-native";
import React from "react";

 type ButtonProps = TouchableOpacityProps & { // além das propriedades que existem em TouchableOpacityProps criamos as nossas próprias
    label : string; // guarda texto do botão
    labelColor?: ColorValue;
    backgroundColor?: ColorValue;


 }

 export function Button({
    label,
    labelColor = "#ffffff",
    backgroundColor ="#905BF4",
    style,                  // (style) permite sobreescrever os estilos que serão aplicados nos botoês.
    ...rest}: ButtonProps){ // vai Pegar otras propriedades como onPress, disabled, etc.
        
    return(
        <TouchableOpacity style ={[styles.container,{ backgroundColor: backgroundColor}, style]}  activeOpacity={0.8}
        {...rest}>
            <Text style ={[styles.label,{color: labelColor}]}>{label}</Text>

        </TouchableOpacity>
    )

    
 }

 const styles = StyleSheet.create({

    container:{
        width: "100%",
        padding: 20,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        margin: 15,
    },
    label:{
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",

    },

 })