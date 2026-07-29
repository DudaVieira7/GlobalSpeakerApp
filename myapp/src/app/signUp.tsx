import AuthLayout from "@/components/authLayout";
import {Line} from "@/components/line";
import {Input} from "@/components/input";
import { Button } from "@/components/button";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View, Text, } from "react-native";
import { Link } from "expo-router";

export default function SignUp(){
    return(
        <AuthLayout>
            <View style={styles.container}>
                <Text style ={styles.title}>Sign Up</Text>
                <Line color="#8b76a536" thickness={1} verticalMargin={10} width="90%"></Line>
                <Input 
                label="Nome"
                placeholder="Digite seu nome"
                icon ={<MaterialIcons name="drive-file-rename-outline" size={24} color="#8B76A5" />}
                />
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
                    <Button label="Entrar"/>
                    <Line color="#8b76a536" thickness={1} verticalMargin={10} width="90%"></Line>
                    <Text style ={styles.footerText}>Já possui uma conta? <Link href={"/"} style={styles.footerLink}>ENTRAR</Link></Text>

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
        textAlign:"center",

    },
    container:{
        width: "100%",
        alignItems:"center",
        justifyContent: "space-evenly",
    
    
    },
    footerText:{
        textAlign: "center",
        marginTop: 24,
        color: "#716087",
        fontSize: 16,
        marginBottom: 50,

    },
    footerLink:{
        color:"#691AFF",
    }

    

})