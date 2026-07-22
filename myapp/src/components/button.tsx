import { 
    StyleSheet,
    Text,
    TouchableOpacity, // torna a ara clicável.
    TouchableOpacityProps, // tipagem do TouchableOpacity
    ColorValue,
 } from "react-native";
import React from "react";

 type buttonProps = TouchableOpacityProps & { // além das propriedades que existem em TouchableOpacityProps criamos as nossas próprias
    label : string; // guarda texto do botão

 }

 export function Button({label, ...rest}: buttonProps){
    return(
        <TouchableOpacity style = {styles.container}  activeOpacity={0.8}>
            <Text style = {styles.label}>{label}</Text>

        </TouchableOpacity>
    )

    
 }

 const styles = StyleSheet.create({

    container:{
        width: "100%",
        padding: 20,
        backgroundColor: "#905BF4",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        margin: 15,
    },
    label:{
        fontSize: 16,
        fontFamily: "Poppins_600SemiBold",
        color: "#ffffff",

    },

 })