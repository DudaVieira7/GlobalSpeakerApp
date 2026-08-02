import { View, Text, StyleSheet, Pressable } from "react-native";
import AuthLayout from "@/components/authLayout";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Line } from "@/components/line";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link } from "@react-navigation/native";

export default function ForgotPassword(){
    return(
        <AuthLayout>
            <View style ={styles.container}>

                <View style={styles.textContainer}>
                     <Text style ={styles.title}>Esqueci minha Senha</Text>
                     <MaterialIcons name="arrow-back-ios" size={24} color="#905BF4" />
                </View>

                <Line color="#8b76a536" thickness={1} verticalMargin={20} width="90%"></Line>
                
                <Text style={styles.welcomeText}>Digite seu e-mail cadastrado e enviaremos um link para redefinição da sua nova senha.</Text>

                <Input
                label="E-mail"
                placeholder="Digite seu E-mail"
                icon = {<Fontisto name="email" size={20} color="#8B76A5" />}
                keyboardType="email-address"
                />
                <Line color="#8b76a536" thickness={1} verticalMargin={40} width="90%"></Line>

                <View style ={styles.buttonSty}>
                    <Button
                        label="Redefinir Senha">
                    </Button>
                </View>
            </View>
             
        </AuthLayout>
    )


}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:"100%",
        alignItems:"center",
        
    
    },
     title: {
        color: "#7568A9",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        margin: 10,
        textAlign:"center"

    },
    textContainer:{
        flexDirection: "row-reverse",
        alignItems:"center",
        justifyContent: "space-around",
        width:"100%",
    },

    welcomeText:{
        marginTop: 14,
        color: "#716087",
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        padding: 30
        

    },
    buttonSty:{
        width: "100%",
        alignItems: "center",
        margin: 15

    }
    


})