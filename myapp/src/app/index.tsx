
import AuthLayout from "@/components/authLayout";
import {Line} from "@/components/line";
import {Input} from "@/components/input";
import { Button } from "@/components/button";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View, Text, } from "react-native";
import { Link } from "expo-router";

export default function Index(){
    return(
       
        <AuthLayout>

            <View style ={styles.container}>
                <Text style={styles.title}>Login</Text>
                <Line color="#8b76a536" thickness={1} verticalMargin={10} width="90%"></Line>
               
                <Input 
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    icon={<Fontisto name="email" size={20} color="#8B76A5" />}
                    keyboardType="email-address"
                />
       
                <Input 
                    label="Senha" 
                    placeholder="Digite sua senha" 
                    icon={<Feather name="lock" size={20} color="#8B76A5" />}
                    secureTextEntry  // faz parte das TextInputProps
                />
                <Text style= {styles.subtitle}><Link href={"/forgotPassword"}>Esqueci minha senha</Link></Text>
                 
                <Button label="Entrar"/>
                <Line color="#8b76a536" thickness={1} verticalMargin={10} width="90%"></Line>
                <Text style ={styles.footerText}>
                    Não tem uma conta? <Link href={"/signUp"} style={styles.footerLink}>CRIAR CONTA</Link>
                </Text>
               
            </View>
            

        </AuthLayout>
    

    )
}

const styles = StyleSheet.create({
    title: {
        color: "#7568A9",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        margin: 10,
        textAlign:"center"

    },
    subtitle:{
        color: "#691AFF",
        fontFamily:"Poppins_400Regular",
        left: "28%",
        fontSize: 14,
        padding: 10,
        


    },
    container:{
        width: "100%",
        height:"100%",
        alignItems:"center"
    
    },

    footerText:{
        textAlign: "center",
        marginTop: 24,
        color: "#716087",
        fontSize: 16

    },
    footerLink:{
        color:"#691AFF",
    }



    

    

})
