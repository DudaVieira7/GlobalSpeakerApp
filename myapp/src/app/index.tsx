
import AuthLayout from "@/components/authLayout";
import {Line} from "@/components/line";
import {Input} from "@/components/input";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, View, Text, } from "react-native";

export default function Index(){
    return(
       
        <AuthLayout>

            <View style ={styles.container}>
                <Text style={styles.titulo}>Login</Text>
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
                <Line color="#8b76a536" thickness={1} verticalMargin={10} width="90%"></Line>
               
            </View>
            

        </AuthLayout>
    

    )
}

const styles = StyleSheet.create({
    titulo: {
        color: "#7568A9",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 16,
        margin: 10,
        textAlign:"center"

    },
    container:{
        width: "100%",
        height:"100%",
        alignItems:"center"
    
    },

    

    

})
